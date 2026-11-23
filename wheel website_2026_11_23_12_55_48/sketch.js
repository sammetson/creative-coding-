
// click and drag the mouse to view the scene from different angles. 
let torusSize = 0; 
function setup () {
  createCanvas(500, 700, WEBGL);
  describe( "A gray square. a white circle at its centre grows up when the user scrolls"
 );

}

function draw () {
  // R, G & B values.
  background(0, 51, 102)
// draw the circle 
  translate(torusSize,0,0);
  rotate(torusSize);
  torus(30, 20, 24);
}
  // increment circlesize when the user scrolls the mouse wheel.
  function mouseWheel(){
    torusSize += 1;
     //uncomment to prevent any default behaviour. 
    // return false;
 //Draw the torus
  //set its radius to 12.
  torus(40);
   
}





