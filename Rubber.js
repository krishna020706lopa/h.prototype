class Rubber {
    constructor(x, y,radius) {
      var options = {
          'restitution':3.0,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y,radius, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill(255);
      pop();
    }
  };
  