$(document).bind('mousemove', function (e) {
  $('#mousePos').css({
    top: e.pageY - $("#mousePos").height() / 2, // just minus by half the height
    left: e.pageX - $("#mousePos").width() / 2 // just minus by half the width
  });
});
//updates the position of the div  to be the position of the cursor
var Saccade;
var Dwell;
var element = document.getElementById("mousePos");
//establishes variables
document.onmousemove = function () {
  clearTimeout(Saccade);
  clearTimeout(Dwell);
//clears previous shake triggers for both color change and shake of blue circle
  Saccade = setTimeout(
    function () {
       element.classList.add("shake-animation");
        }, 50)
  element.classList.remove('shake-animation');
  // can't remove something it doesnt have
  console.log("pleh");
//applies shake animation to the div: mousepos
  Dwell = setTimeout(
    function () {
      var x = document.getElementById("bluecircle");
      x.style.fill = "#c4354c99";
//applies color to the SVG file after certain period
    }, 1000)
// runs this code every 1000 milliseconds
  var x = document.getElementById("bluecircle");
  x.style.fill = "#0000ff99";


}
