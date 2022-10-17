class Game {
    constructor(){
        this.swatter = new Swatter()
        this.fliesArr = []
        this.score = new Score()
        this.timer = new Timer()
        this.menu = new Menu()
        this.gameStarted = false
        this.swatterImage
        this.downSwatter
        this.fliesImage
        this.impactExplosion
        this.impactSwatter
        this.winThreshold = 10
        this.youLose = false
        this.youWin = false
        this.flySwatted = false
        this.flyMissed = false
        this.themeSong
        this.fasterThemeSong
        this.menuMusic
        this.startGameSound
        this.gameoverMusic
        this.missSound
        this.missSound2
        this.hitSound
        this.loseSound
        this.winSound
        this.winCrowd
        this.loseSoundPlayCount = 0
        this.frameCounter = 0
        this.backgroundColor = 250
        this.explosionCounter = 10
        this.maximumFlies = 0
        this.font
        this.selectClass = document.getElementsByTagName('select')

    }

    preload() {
        this.swatterImage = loadImage('./assets/Fly Swatter Main.png')
        this.downSwatter = loadImage('./assets/Fly Swatter Main_3.png')
        this.fliesImage = loadImage('./assets/Fly.png')
        this.impactExplosion = loadImage('./assets/Explosion_Hit.png')
        this.impactSwatter = loadImage('./assets/Swatter_Motion.gif')
        this.themeSong = loadSound('assets/BackgroundMusicSlow.mp3')
        this.fasterThemeSong = loadSound('assets/BackgroundMusicFast.mp3')
        this.menuMusic = loadSound('assets/menu_music.mp3')
        this.startGameSound = loadSound('assets/start_game.wav')
        this.gameoverMusic = loadSound('assets/Gameover.mp3')
        this.missSound = loadSound('assets/Hit_2.mp3')
        this.missSound2 = loadSound('assets/Punch2.mp3')
        this.hitSound = loadSound('assets/Hit.mp3')
        this.loseSound = loadSound('assets/Lose.mp3')
        this.winSound = loadSound('assets/Win.wav')
        this.winCrowd = loadSound('assets/Win_Crowd.wav')
        this.font = loadFont('assets/Retro Gaming.ttf')

    }
    
    background() {
        stroke(200)
        strokeWeight(3)
        //Horizontal Lines
        for (let i = 50; i < 500; i+=50) { 
            for (let j = 5; j < 500; j+=50) {
            line (j, i, j+45, i)
            }
        }
        //Vertical Lines
        for (let k = 50; k < 500; k+=50) { 
            for (let l = 5; l < 500; l+=50) {
            line (k, l, k, l+45)
            }
        }
    }

    moused(){
        
       //Check is collision is true when mouse is clicked. If true play Hit Sound and increase score by 1 
       this.fliesArr.forEach(function (fly) {
            if (fly.collided){
            game.score.score++
            game.hitSound.play()
            game.missSound.play()
            game.missSound2.play()
            game.removeFly()
            game.explosionCounter = 0

         }
        
        //If collision is true on click and game score has reached threshold and timer is more than 0, play win game sound and change
        //win bool state to true
        if ((fly.collided) && (game.score.score >= game.winThreshold) && (!game.timer.timerUp)) {
            game.winSound.play()
            game.winCrowd.play()
            game.hitSound.play()
            game.missSound.play()
            game.missSound2.play()
            game.youWin = true
            image(game.impactExplosion, mouseX-50, mouseY-50, 50, 50)  
         }
         //Otherwise play the missed hit sound. No change to score or win/loss state
         else if (!fly.collided && (!(!game.youWin && game.youLose) || (game.youWin && !game.youLose))){
            game.missSound.play()
            game.missSound2.play()
         }
         })
        }
    
    createFly(){
        if ((this.fliesArr.length <= this.maximumFlies) && (this.score.score <= (this.winThreshold-1)) && (!this.youLose) && (!this.youWin)) {
            this.fliesArr.push(new Flies(this.fliesImage))}
        
        this.fliesArr.forEach(function (flies) {
			flies.draw()
		}) 

    }

    removeFly(){
        this.fliesArr = this.fliesArr.filter(fly => {
			if (fly.collided || this.youLose) {
                this.flySwatted = true
				return false
			} else {
				return true
			}
		})  
    }

    timeIsUp(){
        if ((this.score.score < this.winThreshold) && (this.timer.timeUp)) {
            this.loseSoundPlayCount += 1
            this.youLose = true
            //console.log(this.loseSoundPlayCount)
            if ((!this.loseSound.isPlaying()) && (this.loseSoundPlayCount < 2)) {
                this.loseSound.play()

            }
            if (this.youLose && !this.gameoverMusic.isPlaying()) {
                this.gameoverMusic.loop()
            }
            this.score.drawLoss()
        }
    }

    gameWon (){
        if (this.youWin){
            
            this.score.drawWin()
            this.explosionCounter = 21
            if(!this.gameoverMusic.isPlaying()){
                this.gameoverMusic.loop()
            }
            }
    }

    checkMousePressed(){
        if ((!mouseIsPressed) && (!this.youWin) && (!this.youLose)) {
            image(this.swatterImage, mouseX-50, mouseY-50, 100, 100)
            //console.log('released')   
        }
        else if ((mouseIsPressed) && (!this.youWin) && (!this.youLose)){
            image(this.downSwatter, mouseX-50, mouseY-50, 100, 100)
        }
       }

    playingBackgroundSound() {
        this.frameCounter = frameCount
        if (!this.themeSong.isPlaying() && !this.timer.timerUnder5Secs) {
            this.themeSong.play()
        }
        else if ((!this.fasterThemeSong.isPlaying()) && (this.timer.timerUnder5Secs) && (!this.youLose && !this.youWin)){
            game.themeSong.stop()
            game.fasterThemeSong.play()
          }

          else if (this.fasterThemeSong.isPlaying() && (this.youLose || this.youWin)) {
            game.fasterThemeSong.stop()
          }
    }

    explosionTimer() {
        if (this.explosionCounter < 9) {
            image(game.impactExplosion, mouseX-37.5, mouseY-75, 75, 75)
        }
    }

    reloadPage() {
        if ((this.youWin && !this.youLose) || (!this.youWin && this.youLose)) {
            window.location.reload()
        }
    }

    startGameSoundFunc() {
        if (!this.startGameSound.isPlaying() && !this.gameStarted) {
            this.startGameSound.play()
        }
    }

    draw(){
        clear()


        if (this.gameStarted) {
            this.selectClass[0].className = 'active'
            this.selectClass[0].style.visibility = 'hidden'
        }
        

        if (this.menuMusic.isPlaying){
            this.menuMusic.stop()
        }

        background(this.backgroundColor)
        this.explosionCounter++
        this.background()
        this.timeIsUp() 
        this.explosionTimer()
        this.score.draw()
        this.timer.draw()
        this.createFly()
        this.checkMousePressed()
        this.gameWon()
        this.playingBackgroundSound()

        } 

        
        
        
    }

