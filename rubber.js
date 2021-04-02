class Rubber {
    constructor(x, y,r) {
      var rubber_options = {
          restitution:0.3,
          friction:5,
          density:1.0
      }
      this.x = x;
      this.y = y;
      this.r =r;
      this.body = Bodies.circle(this.x,this.y,(this.r-20/2),rubber_options)
      World.add(myWorld, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(RADIUS);
      fill("red");
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  }
  