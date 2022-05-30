
function clickToShow() {
    var x = document.getElementByClassName("element-item-content");
    if (    x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
      console.log{x.style.display}
    }
}