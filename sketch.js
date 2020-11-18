
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobOject1,bobOject2,bobOject3,bobOject4,bobOject5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobOject1 = new Bob(200,350,30);
	bobOject2 = new Bob(210,350,30);
	bobOject3 = new Bob(220,350,30);
	bobOject4 = new Bob(230,350,30);
	bobOject5 = new Bob(240,350,30);

	roof = new Roof(150,250,100,50);
	Chain1 = new Rope(bobOject1.body,roof.body);
	Chain2 = new Rope(bobOject2.body,roof.body);
	Chain3 = new Rope(bobOject3.body,roof.body);
	Chain4 = new Rope(bobOject4.body,roof.body);
	Chain5 = new Rope(bobOject5.body,roof.body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  bobOject1.display();
  bobOject2.display();
  bobOject3.display();
  bobOject4.display();
  bobOject5.display();

  roof.display();
  Chain1.display();
  Chain2.display();
  Chain3.display();
  Chain4.display();
  Chain5.display();
}



