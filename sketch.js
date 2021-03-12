const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload() {
    
}

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    
}

function draw(){
    
    
    
    ground.display();
    
    platform.display();
        
}


