function setup() {
  createCanvas(400, 400);
  background("gray");
}

function draw() {
  
  stroke("black");
  fill("purple");
  
  if(mouseIsPressed){
  rect(mouseX,mouseY,20,30)
  }
}
