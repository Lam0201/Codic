//Thêm hoặc bớt class="show"
function myFunction(id) {
  document.getElementById(id).classList.toggle("show");
}
//Lấy tất cả các button menu và các thẻ dropdown
var buttons = document.getElementsByClassName('element-item');
var contents = document.getElementsByClassName('element-item-content');

//Lặp qua tất cả các button menu và gán sự kiện
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(){
      //lấy value của buttons
      var id = this.value;
      //ẩn tất cả các menu con đang được hiển thị
      for (var i = 0; i < contents.length; i++) {
          contents[i].classList.remove("show");
      }
      //hiển thị menu vừa được click
      myFunction(id);
  });
}

 //nếu click ra ngoài các button thì ẩn tất cả các menu con
window.addEventListener("click", function(){
  if (!event.target.matches('.element-item')){
     for (var i = 0; i < contents.length; i++) {
         contents[i].classList.remove("show");
     }
  }
});


