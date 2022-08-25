class Flies{
    constructor(image) {
        this.flyImage = image
        this.x = (Math.random() * 440) + 5
        this.y = (Math.random() * 440) + 5
        this.xPolarity = 1
        this.yPolarity = 1
        this.collided = false
        this.randomAdder = 2
        this.randomFrameCountNumX
        this.randomFrameCountNumY
        this.count = 0
        this.difficulty = [
            {level1: 1, level2: 0.8, level3: 0.8, level4: 0.8},
            {level1: 3, level2: 1, level3: 1, level4: 1},
            {level1: 5, level2: 1.2, level3: 1.2, level4: 1.2}
        ]
        this.difficultySelector = game.menu.dropdownVal
        this.level2 = floor(game.winThreshold/1.2)
        this.level3 = floor(game.winThreshold/2)
        this.level4 = floor(game.winThreshold/4)
        this.accelerator = this.difficulty[this.difficultySelector].level1
        this.counter = 0
    }

    randomFrameCount() {
        this.randomFrameCountNumX = (Math.floor(Math.random() * 100)) + 75 
        this.randomFrameCountNumY = (Math.floor(Math.random() * 100)) + 75
            //console.log(this.randomFrameCountNum)
        if ((frameCount % this.randomFrameCountNumX) === 0) {
                
                this.xPolarity *= -1
            }

            if ((frameCount % this.randomFrameCountNumY) === 0) {
                
                this.yPolarity *= -1
            }
    }
    
    coordinates() {
        this.x += (Math.random(0, 0.1) * (this.randomAdder + this.accelerator)) * this.xPolarity
        this.y += (Math.random(0, 0.1) * (this.randomAdder + this.accelerator)) * this.yPolarity
        if ((this.x >= 450) || (this.x <= 50)) {
                this.xPolarity *= -1
            }
        
        if ((this.y >= 450) || (this.y <= 50)) {
        this.yPolarity *= -1   
        console.log('Y polarity switch')            
    }
    console.log(this.counter)
    
    }
    
    collision() {
        if (dist(mouseX-25, mouseY-50, this.x, this.y) < 25){
            this.collided = true   
            }

        else   {
            this.collided = false
            }           
        }

    draw() {
        //console.log(this.difficultySelector)
        //console.log(this.accelerator)
        if (((game.score.invertedScore) <= (this.level2)) && (game.score.invertedScore > this.level3) && (this.count < 1)) {
            console.log('level 2')
            this.count++
            this.randomAdder += (this.accelerator + this.difficulty[this.difficultySelector].level2)
                }

        if (((game.score.invertedScore) <= (this.level3)) && (game.score.invertedScore > this.level4) && (this.count < 1)) {
            //console.log(this.level3)
            //console.log('level 3')
            this.count++
            this.randomAdder += (this.accelerator + this.difficulty[this.difficultySelector].level3)
        }

        if (((game.score.invertedScore) <= (this.level4+1)) && (this.count < 1)) {
            //console.log('level 4')
            this.count++
            this.randomAdder += (this.accelerator + this.difficulty[this.difficultySelector].level4)
        }


        if (game.youLose === false) {
            this.randomFrameCount()
            this.coordinates()
            this.collision()
            image(this.flyImage, constrain(this.x, 50, 450), constrain(this.y, 50, 450), 30, 30)  
        }  

        
            //console.log('done')
            //console.log(mouseX)

            }
    
    }
    