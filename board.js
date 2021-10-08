class Board{

constructor(x,y,width,heigth){

var options = {
   isStatic:true
}

this.body = Bodies.rectangle(x,y,width,heigth,options);

this.width = width;
this.heigth = heigth
this.image = loadImage("board.png")

World.add(world,this.body)
}

display(){

var pos = this.body.position;
push()
imageMode(CENTER)
image(this.image,pos.x,pos.y,this.width,this.heigth)
pop()

 }
 remove(index){
 this.isRemoved = true
Matter.World.remove(world,this.body)
delete playerArrows[index]

 }
}
