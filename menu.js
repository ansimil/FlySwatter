class Menu {
    constructor() {
        this.dropdownVal = 0
    }


draw() {
        //console.log(this.dropdownVal)
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
        text('Select Difficulty:', 340, 20)

        textSize(36)
        text('Fly Swatter', 120, 100)

        textSize(20)
        text('Press P to play', 160, 400)
        
        /*dropdown.position(850, 50)
        dropdown.option(0)
        dropdown.option(1)
        dropdown.option(2)
        this.dropdownVal = dropdown.value()*/

       if (!game.menuMusic.isPlaying()) {
            game.menuMusic.loop()
        }
    

}

}