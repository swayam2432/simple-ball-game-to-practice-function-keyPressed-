const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var box1;
var box2;
var box3;
var box4;
var box5;

function setup() {
    var canvas = createCanvas(1600, 1200);
    engine = Engine.create();
    world = engine.world;

    //for the box
    box1 = new Box(200, 300, 100, 100);
    //for the ground
    box2 = new Ground(800, 1190, width, 100);
    //for the up wall
    box3 = new Ground(800,10,width,100);
    //for the right wall
    box4 = new Ground(1590,600,50,height);
    //for the left wall
    box5 = new Ground(10,600,50,height);

}

function draw() {
    background(0);
    Engine.update(engine);
    box1.display();
    box4.display();
    box5.display();
    box2.display();
    box3.display();

    fill("red");
    textSize(50);
    text("Play with the ball by continuously pressing the arrow keys :)",200,300);
   
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        Body.applyForce(box1.body, box1.body.position, { x: 30, y: -30 });
    }

    if (keyCode === RIGHT_ARROW) {
        Body.applyForce(box1.body, box1.body.position, { x: 50, y: 10 });
    }

    if (keyCode === LEFT_ARROW) {
        Body.applyForce(box1.body, box1.body.position, { x: -50, y: 10 });
    }

    if (keyCode === DOWN_ARROW) {
        Body.applyForce(box1.body, box1.body.position, { x: 0, y: 30 });
    }
}

