

var colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink"];
var container = document.getElementById("container");
var main = document.getElementById("main");

var mainColor = colors[Math.floor(Math.random()*7)];
main.style.backgroundColor = mainColor;

for (var i = 0; i < 15; i++) {
  var div = document.createElement("div");
  div.className = "color-box";

  var randomColor = colors[Math.floor(Math.random()*7)];
  div.style.backgroundColor = randomColor;


  (function(color) {
    div.addEventListener("click", function(e) {
      var clickedColor = e.target.style.backgroundColor;
      var mainDivColor = main.style.backgroundColor;

      if (clickedColor === mainDivColor) {
        console.log("Colors match!");
      } else {
        console.log(" Colors do not match.");
      }
    });
  })(randomColor);

  container.appendChild(div);
}