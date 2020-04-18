var fixedRect;
var movingRect;

function setup() {
  createCanvas(2000,1200);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(200,400,80,30);
  fixedRect.shapeColor = "lightblue"
  movingRect.shapeColor = "pink"
  //movingRect.velocityX = -1
  //fixedRect.velocityX = 1
  movingRect.velocityY = -1
  fixedRect.velocityY = 1
}

function draw() {
  background(0);  
  //movingRect.x = World.mouseX; 
  //movingRect.y = World.mouseY; 

  bounceOff (fixedRect,movingRect);

  drawSprites();
}