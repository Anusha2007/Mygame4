class Supply{
    constructor(x,y,width,height){
        var options={
            density:0.1,
            friction:0.01,

        }
       this.width=width;
       this.height=height;
       this.body=Bodies.rectangle(x,y,width,height,options);
       World.add(myworld,this.body);
    }

    display(){
        push ();
        rect(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width, this.height);
        Matter.Body.setVelocity(this.body,{x:-4,y:0});
        pop ();
    }
}