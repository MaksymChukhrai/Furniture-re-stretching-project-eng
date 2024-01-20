// parallax.js

document.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    document.getElementById("parallax").style.transform = "translateY(" + scrollPosition * 0.1 + "px)";
  });
  