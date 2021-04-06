var movingplayer,standingplayer
var ball,wall
function setup() {
  createCanvas(800,400);
  movingplayer=createSprite(125,250,100,100)
  movingplayer.debug=true;
  standingplayer=createSprite(300,250,60,60)
  standingplayer.debug=true;
  ball=createSprite(650,250,100,100)
  ball.debug=true
  wall=createSprite(150,259,50,50)
  wall.debug=true
};

function draw() {
  background("black");  
  drawSprites();
movingplayer.x=mouseX;
movingplayer.y=mouseY;

if(istouching(movingplayer,ball))
{
 movingplayer.shapeColor="green";
 ball.velocityX=-5
}
else
    {
      ball.shapeColor="orange"
      movingplayer.shapeColor="lime"
    }
    if(istouching(movingplayer,wall)){
    movingplayer.shapeColor="red"
    wall.shapeColor="cyan"
    }
    else{
      wall.shapeColor="dimond"
      
    }
}




