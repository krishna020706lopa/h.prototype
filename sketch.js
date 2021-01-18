const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    hammer = new Hammer(200,200,80,30);
    ground = new Ground(200,300,400,20);
    rubber = new Rubber(300,30,3);
}

function draw(){
    background(0);
    hammer.display();
    rubber.display();
    Engine.update(engine);
    ground.display();
}