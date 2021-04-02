class Hammer{
    constructor(x,y){
        var hammer_option = {
            restitution : 0.5,
            density : 2,
            friction : 1.0
        }
        this.body = Bodies.rectangle(x,y,150,40,hammer_option);
        this.width = 150;
        this.height = 40;
        World.add(myWorld,this.body);
    }
    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(3);
        stroke("green");
        rectMode(CENTER);
        fill("orange");
        rect(0, 0, this.width, this.height);
        pop();
    }
}