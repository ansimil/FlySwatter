class Timer {
    constructor(){
        this.timeLeft = 41
        this.counter = 0
        this.min
        this.sec
        this.countdownTime
        this.timeUp = false
        this.subtractor = 1
        this.timerUnder5Secs = false
        this.winloss
    }

countdown() {
    if (game.gameStarted) {
    this.timeLeft -= this.subtractor
    this.min = floor(this.timeLeft / 60)
    this.sec = this.timeLeft % 60

    this.countdownTime = nf(this.min, 2) + ':' + nf(this.sec, 2)
    //console.log(this.countdownTime)
}
    if ((this.min === 0) && (this.sec === 0)) {
        this.timeUp = true

    }

    if (this.timeUp) {
        this.subtractor = 0
    }
}

timerUnder5(){
    if ((this.min < 1) && (this.sec <= 10))
    this.timerUnder5Secs = true
    //console.log(this.timerUnder5Secs)
}



draw () {
        textFont(game.font)
        this.winloss = (!game.youWin || !game.youLose)
        //console.log(this.winloss)
        //console.log(game.youLose)
        if(!game.youWin && !game.youLose) {
        
        if (game.timer.timerUnder5Secs && (!game.youWin && !game.youLose) && (frameCount % 3 === 0)) {
            console.log('inside spec')
            textSize(50)
            text(" ", 30, 50)
        }
        
        else if (game.timer.timerUnder5Secs && (!game.youWin && !game.youLose)){
            textSize(50)
            text(this.countdownTime, 30, 50)
        }

        else if (!game.timer.timerUnder5Secs && (!game.youWin || !game.youLose)){

            textSize(26)
            text(this.countdownTime, 30, 50)
        }
    }
        
            

        else if (game.youWin || game.youLose) {
            textSize(26)
            text('00:00', 30, 50)
        }
       /* else if (!game.timer.timerUnder5Secs){
        text(this.countdownTime, 30, 50)
        }*/
        this.timerUnder5()

}
}