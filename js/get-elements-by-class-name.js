function myFunction() {
  var x = document.querySelectorAll("h2, div, span");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "red";
  }
}