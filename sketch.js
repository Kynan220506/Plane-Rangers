var PLAY = 1;
var END = 0;
var gameState = PLAY;

var player;
var enemies1;
var enemies2;
var enemies3;
var enemies4;
var enemies5;

var enemiesBullets1;
var enemiesBullets2;
var enemiesBullets3;
var enemiesBullets4;
var enemiesBullets5;

var obstacles;

var score = 0;

var gameOver, restart;

function preload() {

}

function setup() {
  createCanvas(800, 400);
  
  player = createSprite(50, 200, 50, 50);

  player.shapeColor = "black";
  
  enemies1 = createSprite(750, 100, 25, 25);
  enemies2 = createSprite(750, 150, 25, 25);
  enemies3 = createSprite(750, 200, 25, 25);
  enemies4 = createSprite(750, 250, 25, 25);
  enemies5 = createSprite(750, 300, 25, 25);

  enemiesBullets1 = createSprite(750, 100, 50, 10)
}

function draw() {
  background(255,255,255);  
  player.y = mouseY;

  drawSprites();
}