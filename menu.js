class Menu {
    constructor() {
        this.dropdownVal = 0
        this.flyX = 250
        this.flyY = 250
        this.speed = 3
        this.randomFrameCountNumX
        this.randomFrameCountNumY
        this.xPolarity = 1
        this.yPolarity = 1

    }

    randomFrameCount() {
        this.randomFrameCountNumX = (Math.floor(Math.random() * 100)) + 75 
        this.randomFrameCountNumY = (Math.floor(Math.random() * 100)) + 75
            //console.log(this.randomFrameCountNum)
        if (((frameCount % this.randomFrameCountNumX) === 0) || this.flyX >= 400 || this.flyX <= 0) {
                
                this.xPolarity *= -1
            }

            if (((frameCount % this.randomFrameCountNumY) === 0) || this.flyY >= 400 || this.flyY <= 0) {
                
                this.yPolarity *= -1
            }

            this.flyX += this.speed*this.xPolarity
            this.flyY += this.speed*this.yPolarity
            }

draw() {
        //console.log(this.dropdownVal)
        clear()
        this.randomFrameCount()
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

        textFont(game.font)

        textSize(14)
        // text('Select Difficulty:', 340, 20)

        textSize(36)
        text('Fly Swatter', 120, 100)

        textSize(20)
        text('Press P to play', 152.5, 400)
        
        /*dropdown.position(850, 50)
        dropdown.option(0)
        dropdown.option(1)
        dropdown.option(2)
        this.dropdownVal = dropdown.value()*/

       if (!game.menuMusic.isPlaying()) {
            game.menuMusic.loop()
        }
    
        image(game.fliesImage, this.flyX, this.flyY, 100, 100)

}

}