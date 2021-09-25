var sea;
var ship4;
var sailingship;
var ocean;


function preload(){
ocean = loadImage("sea.png");
sailingship = loadAnimation("ship-4.png");
}



function setup(){
  createCanvas(400,400);
//create sea sprite
sea = createSprite(330,200,0,0);
sea.scale = 0.2;
sea.addImage("water",ocean);
//create ship sprite
ship4 = createSprite(120,200,60,20);
ship4.scale = 0.3;
ship4.addAnimation("sailing",sailingship);

//create edge sprites
edges = createEdgeSprites();

}



function draw(){
background("white");
//add velocity for sea
sea.velocityX = -4;
//add if condition
if(sea.x < 0){
sea.x = sea.width/2;


}
//drawsprites
drawSprites();
}

