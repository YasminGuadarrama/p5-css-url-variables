let num;

function setup() {
  let canvas = createCanvas(0.5*windowWidth, 0.5*windowWidth); //create canvas half screen width
  canvas.addClass('centered'); //add centered class to canvas (see style.css)
   //get color value from URL
  let params = getParams();
  let clr = params.color; 
  num = params.num; 
  //add color values in link to next page
  var a = document.getElementsByTagName('a')[0];
  var href = setParams(a.href, 'color', clr);
  a.href = href;

  background(clr);
  fill('yellow');
  noStroke();
  image(img, mouseX, mouseY);
}

let img;
function preload() {
  img = loadImage('8278.jp2');
}

function draw() {
  for(var i = 0; i < num; i++){
    ellipse(width/2, 50+i*30, 20);
  }
}
