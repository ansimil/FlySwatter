const game = new Game()
const mode = 0

function preload() {
    game.preload()
}

function setup() {
    let canvas = createCanvas(500, 500);
    canvas.parent("canvas");
    game.timer.countdown()
    setInterval(() => game.timer.countdown(), 1000)
    game.themeSong.setVolume(0.2)
    game.fasterThemeSong.setVolume(0.2)
    game.menuMusic.setVolume(0.3)
    game.hitSound.setVolume(0.4)
    game.missSound.setVolume(0.4)
 }

 function keyPressed(){
  if (keyCode === ENTER) {
    game.reloadPage()
    
  }

  if (keyCode === 80) {
    game.gameStarted = true
    console.log('space')
  }
 }

 function mouseClicked() {
    game.moused()
  }
 

 function draw(){

    if (game.gameStarted){
    game.draw()
    if (game.youLose || game.youWin) {
      game.themeSong.stop()
    }
  }

    else {
      game.menu.draw()
    }
    
    
    
    
       
   
  }