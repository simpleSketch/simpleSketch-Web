/*
simpleSketch Web v1.0.0
Copyright (C) 2021 simpleSketch Foundation

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

let color_selection = 0;
let cap_selection = 0;

let thickness = 1.0; //default thickness (0 is minimum or the program will crash)
let increment = 1.0; //the increment by which the thickness changes by
let min_thick = 0.0; //the minimum thickness (0 is the lowest it can go or the program will crash)
let max_thick = 25.0; //the maximum thickness

let curr_color;
let curr_cap;

var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(800, 600);
  centerCanvas();
  background(255);
}

function draw() {
  //draw the variables
  fill(255);
  textSize(32);
  strokeWeight(1);
  noStroke();
  rect(0,0,1000,50);
  fill(0);
  if(color_selection == 0){
    curr_color = "Black";
  }
  if (color_selection == 1){
    curr_color = "Red";
  }
  if(color_selection == 2){
    curr_color = "Orange";
  }
  if(color_selection == 3){
    curr_color = "Yellow";
  }
  if(color_selection == 4){
    curr_color = "Green";
  }
  if(color_selection == 5){
    curr_color = "Blue";
  }
  if(color_selection == 6){
    curr_color = "Purple";
  }
  if(color_selection == 7){
    curr_color = "Rainbow";
  }
  if(color_selection == 8){
    curr_color = "White/Eraser"
  }
  if(cap_selection == 0){
    curr_cap = "Round";
  }
  if(cap_selection == 1){
    curr_cap = "Square";
  }
  text("Thickness: "+thickness, 580, 30);
  text("Cap: "+curr_cap, 320, 30);
  text("Color: "+curr_color, 10, 30);
  //thickness
  strokeWeight(thickness);

  //color selection
  if(color_selection == 0){
    colorMode(RGB);
    stroke(0);
  }
  if(color_selection == 1){
    colorMode(RGB);
    stroke(255,0,0);
  }
  if(color_selection == 2){
    colorMode(RGB);
    stroke(255, 166, 0);
  }
  if(color_selection == 3){
    colorMode(RGB);
    stroke(255, 255, 0);
  }
  if(color_selection == 4){
    colorMode(RGB);
    stroke(0, 255, 0);
  }
  if(color_selection == 5){
    colorMode(RGB);
    stroke(0, 0, 255);
  }
  if(color_selection == 6){
    colorMode(RGB);
    stroke(166, 0, 255);
  }
  if(color_selection == 7){
    colorMode(HSB);
    stroke(frameCount % 256, 255, 255);
  }
  if(color_selection == 8){
    colorMode(RGB);
    stroke(255);
  }

  //cap selection
  if(cap_selection == 0){
    strokeCap(ROUND);
  }
  if(cap_selection == 1){
    strokeCap(PROJECT);
  }

  //draw the line
  if(mouseIsPressed == true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

/*
KEYS:
SPACE = CLEAR
C = CYCLE THROUGH ALL THE COLORS
B = BLACK
E = ERASER/WHITE
UP = HIGHER THICKNESS BY NORMAL INCREMENT
DOWN = LOWER THICKNESS BY NORMAL INCREMENT
A = HIGHER THICKNESS BY 8 TIMES THE NORMAL INCREMENT
Z = LOWER THICKNESS BY 8 TIMES THE NORMAL INCREMENT
S = CHANGE CAP

COLORS BY NUM:
0 = BLACK
1 = RED
2 = ORANGE
3 = YELLOW
4 = GREEN
5 = BLUE
6 = PURPLE
7 = RAINBOW
8 = ERASER/WHITE

STROKE CAP BY NUM:
0 = ROUND (DEFAULT)
1 = SQUARE (PROJECT CAP IN P3)
*/


function keyPressed(){
  if(key == ' '){
    background(255);
  }
  if(key == 'B' || key == 'b'){
    color_selection = 0;
  }
  if(key == 'C' || key == 'c'){
    if(color_selection == 8){
      color_selection = 0;
    }
    else{
      color_selection++;
    }
  }
  if(key == 'E' || key == 'e'){
    color_selection = 8;
  }
  if(keyCode == UP_ARROW){
    if (thickness < max_thick){
      thickness += increment;
    }
  }
  if(keyCode == DOWN_ARROW){
    if (thickness > min_thick){
      thickness -= increment;
    }
  }
  if(key == 'A' || key == 'a'){
    if (thickness < max_thick){
      if (thickness <= max_thick - (increment*8)){
        thickness += (8*increment);
      }
    }
  }
  if(key == 'Z' || key == 'z'){
    if (thickness > min_thick){
      if (thickness >= min_thick + (increment*8)){
        thickness -= (8*increment);
      }
    }
  }
  if(key == 'S' || key == 's'){
    if(cap_selection == 0){
      cap_selection = 1;
    }
    else{
      cap_selection = 0;
    }
  }
}

function windowResized() {
  centerCanvas();
}
