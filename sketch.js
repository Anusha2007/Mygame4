const Bodies=Matter.Bodies;
const World=Matter.World;
const Engine=Matter.Engine;

var myengine,myworld;
var ground,player,backgroundImg1,backgroundImg2;
var supplyImg,oxyTanksImg,obstacle1Img,obstacle2Img,obstacle3Img;
var score=0, supplyGroup, oxyGroup, obstacleGroup;
var obstacle1;

function preload(){
backgroundImg1=loadImage("background 1.jpg");
backgroundImg2=loadImage("background 2.jpg");
astronautImg=loadImage("astronaut-2.png");
supplyImg=loadImage("package.png");
oxyTanksImg=loadImage("oxygen_tanks.png");
obstacle1Img=loadImage("poisonous plant 1.png");
obstacle2Img=loadImage("poisonous plant 2.png");
obstacle3Img=loadImage("poisonous plant 3.png");
}

function setup(){
createCanvas(1000,800);
//myengine=Engine.create();
//myworld=myengine.world;

player=createSprite(200,400,30,40);
player.addImage(astronautImg);
player.scale=0.4;
//player=new Astronaut(200,490,30,40);
//ground1= new Ground(600,530,1300,20);
ground=createSprite(600,530,1300,20);
ground.velocityX=-4;
ground.visible=false;


//supply=new Supply(1000,Math.round(random(100,500)),40,40);
//make groups for supply and oxygen
supplyGroup=new Group();
oxyGroup=new Group();
obstacleGroup=new Group();

//player.debug=true
//player.setCollider("rectangle",0,0,20,mario.height)
}

function draw(){
//Engine.update(myengine);
background(backgroundImg1);

//player.display();
//ground1.display();
//supply.display();

if (ground.x < 0){
    ground.x = ground.width/2;
  }

if(keyDown("up")){
    player.y=player.y-10;
}
if(keyDown("down")){
    player.y=player.y+10;
}
if(keyDown("right")){
    player.x=player.x+10;
}
if(keyDown("left")){
    player.x=player.x-10;
}

if(keyDown("space")){
    player.y=player.y+20;

}

for(i=0;i<supplyGroup.length;i++){
    if(player.isTouching(supplyGroup.get(i))){
        supplyGroup.get(i).destroy();
        score=score+1;
    }
}

for(i=0;i<oxyGroup.length;i++){
    if(player.isTouching(oxyGroup.get(i))){
        oxyGroup.get(i).destroy();
        score=score+1;
    }
}

for(i=0;i<obstacleGroup.length;i++){
   if(player.isTouching(obstacleGroup)){
       //obstacleGroup.get(i).destroy();
       console.log("Game over");
   }
}

getSupplies();
getOxygen();
getObstacles();
drawSprites();

text("Score: "+score,700,100);
}

function getSupplies(){
    if(frameCount%150===0){
        var supply=createSprite(1000,Math.round(random(300,500)),40,40);
        supply.velocityX=-4;
        supply.addImage(supplyImg);
        supply.scale=0.3;
        supplyGroup.add(supply);
        supply.lifetime=250;
        }
}

function getOxygen(){
    if(frameCount%200===0){
        var oxyTanks=createSprite(1000,Math.round(random(70,400)),60,30);
        oxyTanks.velocityX=-2;
        oxyTanks.addImage(oxyTanksImg);
        oxyTanks.scale=0.3;
        oxyGroup.add(oxyTanks);
        oxyTanks.lifetime=350;
    }
}

function getObstacles(){
    if(frameCount%250===0){
        var obstacle1=createSprite(1000,Math.round(random(500,700)),40,50);
        obstacle1.velocityX=-3;
        var rand=Math.round(random(1,4));
        switch(rand){
            case 1:
                obstacle1.addImage(obstacle1Img);
                break;
            case 2:
                obstacle1.addImage(obstacle2Img);
                break;
            case 3:
                obstacle1.addImage(obstacle3Img);
            default:
            break;
        }
        obstacleGroup.add(obstacle1);
        obstacle1.lifetime=250;
    }
}