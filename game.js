class Game {
    constructor(){
        this.swatter = new Swatter()
        this.fliesArr = []
        this.score = new Score()
        this.swatterImage
        this.fliesImage
        this.impactExplosion
        this.impactSwatter
    }

    preload() {
        this.swatterImage = loadImage('./assets/Fly Swatter Main.png')
        this.fliesImage = loadImage('./assets/Fly.png')
        this.impactExplosion = loadImage('./assets/Explosion_Hit.png')
        this.impactSwatter = loadImage('./assets/Swatter_Motion.gif')

    }
    
    background() {

        //Horizontal lines
        stroke(200)
        strokeWeight(3)

        for (let i = 50; i < 500; i+=50) { 
            for (let j = 5; j < 500; j+=50) {
            line (j, i, j+45, i)
            }
        }

        for (let k = 50; k < 500; k+=50) { 
            for (let l = 5; l < 500; l+=50) {
            line (k, l, k, l+45)
            }
        }
    }

    draw(){
        let currFrame = frameCount
        //console.log(currFrame)
        clear()
        background(250)
        this.background()
        if ((this.fliesArr.length <= 0) && (this.score.score <= 2)) {
            this.fliesArr.push(new Flies(this.fliesImage))}
        
        
        this.fliesArr.forEach(function (flies) {
			flies.draw()
		})

        this.swatter.mouseIsPressed()
        this.fliesArr.forEach(function (fly) {
           if (fly.collided && game.swatter.swatterClicked) {
            game.score.score++
            image(game.impactSwatter, mouseX-50, mouseY-50, 100, 100)
            image(game.impactExplosion, mouseX-12.5, mouseY-25, 30, 30)
           }
        }
           //else if (((fly.collided) && (game.swatter.swatterClicked)) === false) {

                
                
                //}  
        )
        image(game.swatterImage, mouseX-50, mouseY-50, 100, 100)
        /*if (this.fliesArr[0].collided && this.swatter.swatterClicked) {
            this.score.score++
            image(this.impactSwatter, mouseX-50, mouseY-50, 100, 100)
            image(this.impactExplosion, mouseX-12.5, mouseY-25, 30, 30)

            console.log('position and clicked')
        }
        else if ((this.fliesArr[0].collided && this.swatter.swatterClicked) === false) {
            image(this.swatterImage, mouseX-50, mouseY-50, 100, 100)
                }  
                */

        this.fliesArr = this.fliesArr.filter(fly => {
			if (fly.collided && this.swatter.swatterClicked) {
				return false
			} else {
				return true
			}
		})
        this.score.draw()
        if ((this.score.score >= 3) && (this.fliesArr.length === 0)){
            textSize(50)
            text('YOU WIN!!!!!!!', 95, 250)
            console.log(this.score.score)
            
        }
        
        

        
        
        
            
        


        

        
            
        
        //if (logic for adding fly) {
			// change to action of adding to flies array ->this.obstacles.push(new Obstacle(this.coinImage))
    }
}



