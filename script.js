var textfield;
var output;
var submit;

function setput() {

   noCanvas();
textfield = select("#blueberry");
//textfield.change(newText);
textfield.input(newTyping);
output = selet('#output');
submit = select("#submit");
submit.mousePressed(newText);


}

function newTyping() {
 output.html(textfield.value());
}

function newText(){
 createP(textfield.value());
}