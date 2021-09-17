class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true

        }
       this.width=width;
       this.height=height;
       this.body=Bodies.rectangle(x,y,width,height,options);
       World.add(myworld,this.body);
    }
       display(){
        //push();
        rectMode(CENTER);
        fill ("black");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        //pop();
       }
    }
