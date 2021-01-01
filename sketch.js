
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, boy, boyIMG, tree;
var rock, sling;
var mango1, mango2, mango3, mango4, mango5, mango6;

function preload()
{
	boyIMG = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,height,width,20);

	boy = createSprite(150,445,80,80);
	boy.addImage(boyIMG);

	boy = new Kid(150,445);
	tree = new Tree(620,310);

	rock = new Stone(100,400);
	sling = new Sling(rock.body, {x: 90, y:400});

	mango1 = new Mango(620,200);
	mango2 = new Mango(600,250);
	mango3 = new Mango(550,200);
	mango4 = new Mango(520,270);
	mango5 = new Mango(670,170);
	mango6 = new Mango(690,260);


	Engine.run(engine);
  
}


function draw() {

	Engine.update(engine);

	rectMode(CENTER);
	background("lightBlue");

	detectollision(rock, mango1);
	detectollision(rock, mango2);
	detectollision(rock, mango3);
	detectollision(rock, mango4);
	detectollision(rock, mango5);
	detectollision(rock, mango6);

	ground.display();
	tree.display();
	boy.display();
	rock.display();
	sling.display();
	
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
  
//   drawSprites();

 
}
function mouseDragged(){

    Matter.Body.setPosition(rock.body, { x: mouseX, y: mouseY});
}

function mouseReleased(){
    
    sling.fly();
}

function keyPressed(){

	if(keyCode === 32){
		Matter.Body.setPosition(rock.body, {x: 100, y:400});
		sling.attach(rock.body);
	}
}

function detectollision(a, b){

	var distance = dist(a.body.position.x, a.body.position.y, b.body.position.x, b.body.position.y);

	if(distance<=b.width/2 + a.width/2){
		Matter.Body.setStatic(b.body,false);
	}

}