
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground, box,box2;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  //Matter.Bodies.circle(x,y,radius,options);
  ball=new Paper(200,200,40)
	box = new Dustbin(310,375,150,20);
   
   box2 = new Dustbin(250,300,20,130);
   box3 = new Dustbin(370,300,20,130);
   ground = new Ground(200,399,399,20);
   console.log(ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  Engine.update(engine);

  box.display();
  box2.display();
  ball.display();
  ground.display();
  box3.display();
  

  
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyforce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	}
}



