var canvas;
var backgroundImage;
var bgImg;
var database;
var form
var player
var game
var gameState, playercount
var car1,car2,trackimage,carImage,car2Image
var cars=[]
var allPlayers


function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1Image=loadImage("./assets/car 1.png")
  car2Image=loadImage("./assets/car 2.png")


}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database()

  game = new Game()
  game.start()
  game.getState()

}

function draw() {
  background(backgroundImage);

if (playercount === 2) {
  game.updateState(1)
}

if (gameState === 1) {
  game.play()
}

}




function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}