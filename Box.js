class Box{
    constructor(x, y) {
        var options = {
            restitution:0.8,
            friction:1.0,
            //density:1.0,
            isStatic:false
        }
        this.body = Bodies.rectangle(x, y, 30, 40, options);
        this.width = 30;
        this.height = 40;
        World.add(world, this.body);
      }
      display(){
        push();
        fill(rgb(136,206,235));
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y,this.width,this.height);
        pop();
      }
}