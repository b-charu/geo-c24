const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var smallStone1,smallStone2,smallStone3,smallStone4,smallStone5,smallStone6,smallStone7,smallStone8;
var stone1,stone2;
var iron;
var rubber1,rubber2;
var hammer;

function setup(){
    var canvas = createCanvas(1200,500);
    myEngine = Engine.create();
    myWorld = myEngine.world;

    ground = new Ground(600,height,1200,20);
// big stones
    stone1 = new Stone(200,320,60,40);
    stone2 = new Stone(620,220,50,80);
//circular stones
    rubber1 = new Rubber(700,240,50);
    rubber2 = new Rubber(900,450,30);
    
//small stones
    smallStone1 = new Rubber(510,450,8);     
    smallStone2 = new Rubber(530,480,15);
    smallStone3 = new Rubber(515,445,8);
    smallStone4 = new Rubber(520,420,15);
    smallStone5 = new Rubber(535,470,5);
    smallStone6 = new Rubber(530,490,20);
    smallStone7 = new Rubber(540,410,5);
    smallStone8 = new Rubber(350,250,25)
//hammer
    hammer = new Hammer(50,100);
//iron
    iron = new Iron(800,350);
    


}

function draw(){
    background("cyan");
    Engine.update(myEngine);

    ground.display();
    
    stone1.display();
    stone2.display();
    
    rubber1.display();
    rubber2.display();
    
    smallStone1.display();
    smallStone2.display();
    smallStone3.display();
    smallStone4.display();
    smallStone5.display();
    smallStone6.display();
    smallStone7.display();
    smallStone8.display();

    hammer.display();
    iron.display();

}
    