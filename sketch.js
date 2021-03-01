var car,wall,thickness;
var speed,weight;
function setup() {
  thickness = random(22,83);
  createCanvas(1600,400);
  wall = createSprite(1200, 200, thickness,100);
  car = createSprite(50, 200, 50, 50);

speed = random(223,321);
weight=random(30,52);
car.velocityX = speed;




}

function draw() {
  background("black");  
  if(wall.x-car.x<(car.width+wall.width)/2){
car.velocityX=0;
var deformation = 0.5* weight* speed * speed/22509;

  
if(deformation>180){

car.shapeColor = "white";

}
if (deformartion<180 && deformation>100)
car.shapeColor = "white";

if (deformation<100)
car.shapeColor = "white";
 
}


if(hasCollided(car,wall))
{
   car.velocityX = 0;
   var damage = 0.5*weight*speed*speed/(thickness * thickness * thickness);
    
   if(damage>10)
   wall.shapeColor = "red";
   if (damage<10)
   wall.shapeColor = "green";
  
}











drawSprites();
}

function hasCollided(lcar,lwall){
  carRightEdge = lcar.x+lcar.width;
  wallLeftEdge = lwall.x;
  if(carRightEdge>=wallLeftEdge)
  return true
  return false
  
  }