var A;
var B;
var box1;
var box2;

function setup() {
  createCanvas(1000,800);
  B=createSprite(400, 200, 50, 50);
  B.shapeColor="green";
  B.debug="true";


  A=createSprite(600,200,50,80);
  A.shapeColor="green";
  A.debug="true";

  box1=createSprite(400,100,80,50);
  box1.shapeColor = "blue";

  A.velocityY = -5;
  B.velocityY = +5;
}

function draw() {
  background(220);  

  A.x=World.mouseX;
  A.y=World.mouseY;

  if(isTouching(B,box1)||isTouching(A,B)){
    box1.shapeColor = "red";
    B.shapeColor="blue";
    A.shapeColor="red";
  }
  else{
    box1.shapeColor = "green";
    B.shapeColor="green";
    A.shapeColor="green";
  }

  bounceOff(A,B);
  bounceOff(B,box1);

  drawSprites();
}

