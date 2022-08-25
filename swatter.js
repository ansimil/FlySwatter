class Swatter {
    constructor(){
        this.swatterClicked = false
    }
    
   mouseIsPressed() {
    if(mouseIsPressed === true) {
        this.swatterClicked = true
    }
    else if (mouseIsPressed === false) {
        this.swatterClicked = false
    }
    }

    hitSound (){
        game.hitSound.play()
    }

    missSound() {
        game.missSound.play()
    }

}