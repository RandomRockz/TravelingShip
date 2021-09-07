var ship,ship_moving;
var seaImage;
var seasea;
function preload(){
    ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
    seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  seasea= createSprite(200,180,400,20);
  seasea.x=seasea.width/2;
  seasea.addImage(seaImage);
// creating ship
 ship = createSprite(50,160,300,10);
 ship.addAnimation("Moving",ship_moving);
 ship.scale=0.3;
 edges = createEdgeSprites();
}

function draw(){
  //set background color
  background("blue");
  seasea.velocityX=-2; 

  if(seasea.x<0)
  {
    seasea.x=seasea.width/2;
  }
  drawSprites();
}



















/*
var trex, trex_running, edges;
var groundImage;
var ground;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
  ground = createSprite(200,180,400,20)
  ground.x=ground.width/2;
  ground.addImage(groundImage);
}



function draw(){
  //set background color 
  background("white");
  
  //logging the y position of the trex
  console.log(trex.y)
  
  //jump when space key is pressed
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide(ground)
 
  ground.velocityX=-2; if(ground.x<0)
  {
    ground.x=ground.width/2;
  }
  drawSprites();
}
*/