var PLAY = 1;
var END = 0;
var gameState = PLAY;

var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var fkground;

var background1;

var cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

var score;
var gameOverImg,restartImg
var jumpSound , checkPointSound, dieSound

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
  
  restartImg = loadImage("restart.png")
  gameOverImg = loadImage("gameOver.png")
  
  jumpSound = loadSound("jump.mp3")
  dieSound = loadSound("die.mp3")
  checkPointSound = loadSound("checkPoint.mp3")
  background1 = loadImage("New Project.png")
}

function setup() {
  createCanvas(displayWidth, 758);
  //createCanvas(600, 200);
  

  // Local variable
 // var message = "This is a message";
 //console.log(message);
  
  // Create T-Rex
  trex = createSprite(width/100,height/1.25,20,50);
  //console.log(displayHeight)
  trex.addAnimation("running", trex_running);
  trex.addAnimation("collided", trex_collided);
  

  trex.scale = 0.8;
  
  // Create ground
  //ground = createSprite(width/3,200,400,20);
  //ground.addImage("ground",groundImage);
  

  fkground = createSprite(width/3,height/1.06,9000,20)
  fkground.x = fkground.width/2;
  fkground.visible = false
  fkground.shapeColor = "green";

  
  
  gameOver = createSprite(width/2,height/2);
  gameOver.addImage(gameOverImg);
  
  restart = createSprite(width/2,height/1.6);
  restart.addImage(restartImg);
  
 
  gameOver.scale = 0.8;
  restart.scale = 0.8;
  
  invisibleGround = createSprite(width/3.33,height/1.05,width,10);
  invisibleGround.visible = false;
  
  
  //create Obstacle and Cloud Groups
  obstaclesGroup = createGroup();
  cloudsGroup = createGroup();


  // Collider for T-Rex
  trex.setCollider("rectangle",0,0,trex.width,trex.height);
  trex.debug = true
  
  score = 0;
  
}

function draw() {
  background(background1);
  gameBody(); 
  
  
}







