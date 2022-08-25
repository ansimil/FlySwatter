class Score {
    constructor(){
        this.score = 0
        this.invertedScore
    }

    draw(){
        this.invertedScore = ((this.score * -1) + game.winThreshold)
        textSize(26)
        text('Flies left: ' + this.invertedScore, 270, 50)
        //console.log(this.invertedScore)
        
}

    drawWin(){
        //console.log('called')
        textSize(50)
        text('YOU WIN!!!!!!!', 75, 250)

        textSize(18)
        text('press ENTER to start a new game', 90, 400)
    }

    drawLoss(){
        textSize(50)
        text('YOU LOSE!!!!!!!', 52, 250)

        textSize(14)
        text('press ENTER to go back to the menu', 90, 400)
            //console.log(this.score.score)
    }

    loseSound(){
        game.loseSound.play()
    }



}