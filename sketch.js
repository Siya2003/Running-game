var bgImage,girlImage;
function preload() {
bgImage = loadImage("images/factory-train-.jpg")
girlImage= loadAnimation("images/girl1.png","images/girl2.png","images/girl3.png","images/girl4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    girl = createSprite(100,550,20,60)
    girl.addAnimation("running",girlImage)
    girl.scale=0.5

}

function draw() {

    background(bgImage);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
