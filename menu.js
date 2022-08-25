class Menu {
    
draw() {
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

        textSize(36)
        text('Fly Swatter', 120, 100)

        textSize(20)
        text('Press P to play', 160, 400)

       if (!game.menuMusic.isPlaying()) {
            game.menuMusic.loop()
        }

}

}