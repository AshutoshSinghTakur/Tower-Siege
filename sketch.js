const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img;

var gameState = "ON_SLING"

function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,350,10);
  stand2 = new Stand(750,240,220,10);
 
    //level one
block1  = new Block(260,275,30,40);
block2  = new Block(320,275,30,40); 
block3  = new Block(350,275,30,40);
block4  = new Block(380,275,30,40);
block5  = new Block(410,275,30,40);
block6  = new Block(440,275,30,40);
block7  = new Block(470,275,30,40);
block17 = new Block(500,275,30,40);
block18 = new Block(290,275,30,40);
block48 = new Block(530,275,30,40);
console.log(block1);
  //level two 
block8  = new Block(260,235,30,40);
block9  = new Block(320,235,30,40);
block10 = new Block(350,235,30,40);
block11 = new Block(380,235,30,40);
block12 = new Block(410,235,30,40);
block19 = new Block(440,235,30,40);
block20 = new Block(470,235,30,40);
block24 = new Block(500,235,30,40);
block25 = new Block(290,235,30,40);
block49 = new Block(530,235,30,40)
//level three
block13 = new Block(260,195,30,40);
block14 = new Block(320,195,30,40);
block15 = new Block(350,195,30,40);
block21 = new Block(380,195,30,40);
block22 = new Block(410,195,30,40);
block26 = new Block(440,195,30,40);
block27 = new Block(470,195,30,40);
block28 = new Block(500,195,30,40);
block29 = new Block(290,195,30,40);
block50 = new Block(530,195,30,40);
//level fore
block30 = new Block(260,155,30,40);
block31 = new Block(320,155,30,40);
block32 = new Block(350,155,30,40);
block33 = new Block(380,155,30,40);
block34 = new Block(410,155,30,40);
block35 = new Block(440,155,30,40);
block36 = new Block(470,155,30,40);
block37 = new Block(500,155,30,40);
block38 = new Block(290,155,30,40);
block51 = new Block(530,155,30,40);
//level five
block39 = new Block(260,115,30,40);
block40 = new Block(320,115,30,40);
block41 = new Block(350,115,30,40);
block42 = new Block(380,115,30,40);
block43 = new Block(410,115,30,40);
block44 = new Block(440,115,30,40);
block45 = new Block(470,115,30,40);
block46 = new Block(500,115,30,40);
block47 = new Block(290,115,30,40);
block52 = new Block(530,115,30,40);
//level six
block53 = new Block(260,75,30,40);
block54 = new Block(320,75,30,40);
block55 = new Block(350,75,30,40);
block56 = new Block(380,75,30,40);
block57 = new Block(410,75,30,40);
block58 = new Block(440,75,30,40);
block59 = new Block(470,75,30,40);
block60 = new Block(500,75,30,40);
block61 = new Block(290,75,30,40);
block62 = new Block(530,75,30,40);
//second stage level one
block63 = new Block(675,190,30,40);
block64 = new Block(705,190,30,40);
block65 = new Block(735,190,30,40);
block66 = new Block(765,190,30,40);
block67 = new Block(795,190,30,40);
block68 = new Block(825,190,30,40);
//second stage level two
block69 = new Block(675,150,30,40);
block70 = new Block(705,150,30,40);
block71 = new Block(735,150,30,40);
block72 = new Block(765,150,30,40);
block73 = new Block(795,150,30,40);
block74 = new Block(825,150,30,40);
//second stage level three
block75 = new Block(675,110,30,40);
block76 = new Block(705,110,30,40);
block77 = new Block(735,110,30,40);
block78 = new Block(765,110,30,40);
block79 = new Block(795,110,30,40);
block80 = new Block(825,110,30,40);
//second stage level foure
block81 = new Block(675,70,30,40);
block82 = new Block(705,70,30,40);
block83 = new Block(735,70,30,40);
block84 = new Block(765,70,30,40);
block85 = new Block(795,70,30,40);
block86 = new Block(825,70,30,40);
//second stage level fift
block87 = new Block(675,30,30,40);
block88 = new Block(705,30,30,40);
block89 = new Block(735,30,30,40);
block90 = new Block(765,30,30,40);
block91 = new Block(795,30,30,40);
block92 = new Block(825,30,30,40);

  //polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  //Engine.update(engine);
  
  textSize(20);
  fill("lightyellow");
  text("Drag the polygon to destroy the blocks",300,30);
  textSize(10);
  text("Press Space to get a second Chance to Play!!",650 ,350);
  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("yellow");
block7.display();

block24.display();
block30.display();

block47.display();  
block50.display();

block54.display();

fill("red");
block53.display();
block48.display();

fill("orange");
block61.display();
block39.display();
block17.display();
block49.display();


fill("green");
block13.display();
block38.display();
block40.display();
block55.display();
block6.display();
block20.display();
block28.display();
block51.display();

fill("blue");
block8.display();
block29.display();
block31.display();
block41.display();
block56.display();
block5.display();
block19.display();
block27.display();
block37.display();
block52.display();

fill("indigo");
block1.display();
block25.display();
block14.display();
block32.display();
block42.display();
block57.display();
block4.display();
block12.display();
block26.display();
block36.display();
block46.display();
block62.display();

fill("violet");
block18.display();
block9.display();
block15.display();
block33.display();
block43.display();
block58.display();
block3.display();
block11.display();
block22.display();
block35.display();
block45.display();
block60.display();

fill("white");
block44.display();
block10.display();
block2.display();
block21.display();
block34.display();
block59.display();

fill("black");
block77.display();
block78.display();

//for second stage
fill("green");
block70.display();
block73.display();
block82.display();
block85.display();
block76.display();
block79.display();
block83.display();
block84.display();
block71.display();
block72.display();

//for secone stage
fill("white");
block65.display();
block66.display();
block63.display();
block64.display();
block67.display();
block68.display();
block69.display();
block74.display();
block91.display();
block92.display();
block87.display();
block88.display();
block81.display();
block86.display();
block89.display();
block90.display();
block75.display();
block80.display();
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
  
}
function mouseDragged(){
  if(gameState === "ON_SLING"){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
  }
}
function mouseReleased(){
  gameState === "RELEASED"
  slingShot.fly();
  
}
function keyPressed(){
//write code for extra chance of the player
if(keyCode === 32){
  Matter.Body.setPosition(this.polygon,{x:100,y:250})
  slingShot.attach(this.polygon); 
}
}
