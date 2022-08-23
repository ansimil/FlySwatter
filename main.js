const game = new Game()
let themeSong

function preload() {
    game.preload()
    themeSong = loadSound('assets/Theme_1.mp3')

}

function setup() {
    let canvas = createCanvas(500, 500);
    canvas.parent("canvas");
    
  }

function mousePressed(){
  themeSong.play()
}


 function draw(){
    game.draw()   
  }