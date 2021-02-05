var bullet, wall, thickness;
var speed,weight;




function setup() {
  createCanvas(1600,400);

  thickness= random(22,83);
  bullet= createSprite(200,200,50,50);
  wall=createSprite(1200,200,thickness,100);

  bullet.velocityX = speed;

  speed= random(25,31)
  weight= random(400,1500)

 
}

function draw() {
  background("cyan");
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509
    if(deformation>180)
    {
      bullet.shapeColor=color("white");
      wall.shapeColor=color("yellow");
    }
    if(deformation<180 && deformation>100)
    {
       bullet.shapeColor=color("white");
       wall.shapeColor=color("red");
    }
    if(deformation<100)
    {
      bullet.shapeColor=color("white");
      wall.shapeColor=color("green")
    }



  }

  if(hasCollided(bullet, wall))
  {
    bullet.velocityX=0
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
    
    if (damage>10);
    {
      wall.shapeColor="red"
    }
    if (damage<10);
  {
    wall.shapeColor="green";
  }
  
  }


    
  drawSprites();
}



function hasCollided (lbullet,lwall) {
bulletRightEdge=lbullet.x+ lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>wallLeftEdge) {
  return true;
}
    return false; 
}