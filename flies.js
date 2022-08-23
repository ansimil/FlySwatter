class Flies{
    constructor(image) {
        this.flyImage = image
        this.x = Math.random() * 450
        this.xPolarity = 1
        this.y = Math.random() * 450
        this.yPolarity = 1
        this.collided = false
        this.randomAdder
        this.randomFrameCountNumX
        this.randomFrameCountNumY
    }

    randomFrameCount() {
        this.randomFrameCountNumX = (Math.floor(Math.random() * 100)) + 75 
        this.randomFrameCountNumY = (Math.floor(Math.random() * 100)) + 75
            //console.log(this.randomFrameCountNum)
        if ((frameCount % this.randomFrameCountNumX) === 0) {
                console.log('X polarity switch')
                this.xPolarity *= -1
            }

            if ((frameCount % this.randomFrameCountNumY) === 0) {
                console.log('Y polarity switch')
                this.yPolarity *= -1
            }
    }
    
    coordinates() {
        this.randomAdder = 5
        this.x += (Math.random(0, 0.1) * this.randomAdder) * this.xPolarity
        this.y += (Math.random(0, 0.1) * this.randomAdder) * this.yPolarity
        if ((this.x >= 450) || (this.x <= 50)) {
            this.xPolarity *= -1     
        }

        if ((this.y >= 450) || (this.y <= 50)) {
            this.yPolarity *= -1      
        }
    }        
    
    collision() {
        if (dist(mouseX-25, mouseY-25, this.x, this.y) < 25){
            this.collided = true   
            }

        else   {
            this.collided = false
            }           
        }

    draw() {
            this.randomFrameCount()
            this.coordinates()
            this.collision()
            image(this.flyImage, this.x, this.y, 30, 30)    
            //console.log('done')
            //console.log(this.x)
            }
    
    }
    