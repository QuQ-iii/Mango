class Mango{
    constructor(x,y){

        var options = {
            isStatic : true,
            restitution : 0,
            friction : 1.2,
            
        }
      
      this.body = Bodies.circle(x, y, 15, options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("mango.png");
        World.add(world, this.body);

    }
  
    display() {

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 50, 50);
        pop();
        
    }
  }