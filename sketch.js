
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1,ball2,ball3,ball4,ball,roof;
var rope1,rop2,rope3,rope4,rope5;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof();

	ball1 = new Ball(275,400,30);
	rope1 = new Rope(ball1.body,roof.body,0);

	ball2 = new Ball(225,400,30);
	rope2 = new Rope(ball2.body,roof.body,-60);

	ball3 = new Ball(325,400,30);
	rope3 = new Rope(ball3.body,roof.body,60);

	ball4 = new Ball(375,400,30);
	rope4 = new Rope(ball4.body,roof.body,120);

	ball5 = new Ball(175,400,30);
	rope5 = new Rope(ball5.body,roof.body,-120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  
  roof.display();
  
  rope1.display();
  rope2.display();
  rope3.display();  
  rope4.display(); 
  rope5.display(); 
  
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Body.applyForce(ball5.body,ball5.body.position,{x:-250,y:200});
	}
}



