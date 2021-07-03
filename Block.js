class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility = 255
      World.add(world, this.body);
    }
    display(){
      //console.log(this.body.speed);
      if(this.body.speed > 5){
        World.remove(world, this.body);

      }
      else{
        var pos= this.body.position;
        push();
        var pos= this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width, this.height);
        this.Visiblity = this.Visiblity -1;
        tint(255,this.Visiblity);
        pop();
      } 
    }
}