
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinImg;

function preload()
{
	dustbinImg = loadImage("dustbin.png");
}

function setup() {
	createCanvas(1000, 700);

	

	engine = Engine.create();
	world = engine.world;
	boxposition = width - 200;
	boxy = 650;

	//Create the Bodies Here.
	ground1 = new Ground(width/2, height-35, width,10);
	middlebox = new Box(boxposition,boxy,200,20);
	leftbox = new Box(boxposition-100,boxy-90,20,200);
	rightbox = new Box(boxposition+100,boxy-90,20,200);
	paperObject=new Paper(40,350,35);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });


	Engine.run(engine);
	Render.run(render);
  
}


function draw() {

  rectMode(CENTER);
  background('white');
  ground1.display();
  middlebox.display();
  leftbox.display();
  rightbox.display();
  imageMode(CENTER);
  image(dustbinImg,800,540,200,200);
  paperObject.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:50,y:-72});
  
	}
}



