var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var score 
var cloud, cloudsGroup, cloudImage;
var obstacl1,obstacl2,obstacl3,obstacl4,obstacl5,obstacl6
var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 
  obstacl1= loadImage("obstacle1.png")
  obstacl2= loadImage("obstacle2.png")
  obstacl3= loadImage("obstacle3.png")
  obstacl4= loadImage("obstacle4.png")
  obstacl5= loadImage("obstacle5.png")
  obstacl6= loadImage("obstacle6.png")
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)

  score = 0
  
}

function draw() {
  background(180);

  text("score"+score,500,50)
  score = score+Math.round(frameCount/60)
  
  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  spawnObstacle();
  drawSprites();
}

// spawn the obstacle
function spawnObstacle(){

  if (frameCount % 60=== 0){
  obstacl = createSprite (600,165,10,40) 
  obstacl.velocityX = -6
  var rand=Math.round(random(1,6))
  switch (rand){
  case 1 : obstacl.addImage(obstacl1)
  break;
  case 2 : obstacl.addImage(obstacl2)
  break;
  case 3 : obstacl.addImage(obstacl3)
  break;
  case 4 : obstacl.addImage(obstacl4)
  break;
  case 5 : obstacl.addImage(obstacl5)
  break;
  case 6 : obstacl.addImage(obstacl6)
  break;
  default:break
  }
  obstacl.scale = 0.5;
  obstacl.lifetime = 300
  }
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 200
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}

