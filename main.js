const game = new Game()
let dropdown

function preload() {
    game.preload()
}

function setup() {
    let canvas = createCanvas(500, 500);
    canvas.parent("canvas");
    game.timer.countdown()
    setInterval(() => game.timer.countdown(), 1000)
    game.themeSong.setVolume(0.4)
    game.fasterThemeSong.setVolume(0.4)
    game.menuMusic.setVolume(0.5)
    game.hitSound.setVolume(0.4)
    game.missSound.setVolume(0.5)
    game.missSound2.setVolume(0.5)
    game.gameoverMusic.setVolume(0.5)

    dropdown = createSelect()
    dropdown.position(950, 12)
    dropdown.option('EASY')
    dropdown.option('MEDIUM')
    dropdown.option('HARD')
    dropdown.changed(changeDropdownVal)
    
 }

 function changeDropdownVal(){
 if (dropdown.value() === 'EASY') {
  game.menu.dropdownVal = 0
 }

 else if (dropdown.value() === 'MEDIUM') {
  game.menu.dropdownVal = 1
 }

 else if (dropdown.value() === 'HARD') {
  game.menu.dropdownVal = 2
 }
}


 function keyPressed(){
  if (keyCode === ENTER) {
    game.reloadPage()
    
  }

  if (keyCode === 80) {
  game.startGameSoundFunc()
  game.gameStarted = true
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