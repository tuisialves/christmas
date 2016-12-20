var myBg
var papa
var rena
var neve
var colorList = ['#5CAA46','#ED1F24','#2B328A','#33CDD1'];


function preload() {
  myBg = loadImage('assets/back2.png');

  papa = loadImage('assets/papa.png');
  snow = loadImage('assets/snow.png');
  neve = loadImage('assets/neve.png');
  rena = loadImage('assets/rena.png');
}
function setup() {
  createCanvas(360,640);
    frameRate(1)
  

  
  //Deal with microphone
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  var volume = mic.getLevel();
  
  //If the volume is not enought, re-map it (set a higher newMax).
  var newMax = 10;
  volume = map(volume,0,1,0,newMax);
  

  
  background(colorList);
  
  
  push();  
  
  //Start with transformations
  translate(width/2,height/2);
  var size = map(volume,0,1,width/5,width/2);
  imageMode(CENTER)
  image (snow,10,10,360+size,640+size);
  
  image(rena,-100,100,240+size,427+size);
  image(neve,100,100,240+size,427+size);
  image(papa,0,0,360+size,640+size);
  pop();  //All transformation are now dropped and the coordinate system is resetted
 
    for(var x=0 ; x < width ; x+=25){
 for(var y=0 ; y < height ; y+=25){
 noStroke()
 var index = floor(random() * colorList.length);
 var colorHex = colorList[index];
 fill(color(colorHex));
 
 textSize(45)
 textAlign(CENTER)
 textFont('Mountains of Christmas')
 text(('Merry Christmas'),180,150);

}
}

 }
   
   
  



  
  


