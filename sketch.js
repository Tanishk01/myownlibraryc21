var movingRect, fixedRect;
var fixedRect1, fixedRect2, fixedRect3;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "orange";

  fixedRect=createSprite(500,300,50,50);
  fixedRect.shapeColor = "green";

  fixedRect1 =  createSprite(200, 300, 50, 40);
  fixedRect1.shapeColor = "red"
}

function draw() {
  background(0,0,0); 
   movingRect.x= mouseX;
   movingRect.y= mouseY;

   if(isTouching(movingRect, fixedRect))
   {
    text("You are awesome!" , 200, 200);
   }
   else
   {
    movingRect.shapeColor = "white";
    fixedRect.shapeColor = "white";
   }

  drawSprites();
}