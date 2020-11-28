class Paper {
    constructor(x,y,radius){
        var options = {
            restitution:0.3,
            friction:0,
            density:1.2,
            isStatic: false
        }
        this.body = Bodies.circle(x,y,radius/2,options);
        this.radius = radius;
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        push();
        translate(pos.x,pos.y);
       // rectMode(CENTER);
       imageMode(CENTER);
        image(this.image,0,0,this.radius*2,this.radius*2);
       // fill(255);
        //ellipse(0,0,this.radius,this.radius);
        pop();
    }
}