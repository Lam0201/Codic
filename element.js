//Thêm hoặc bớt class="show"
function myFunction(id) {
  document.getElementById(id).classList.toggle("show");
}
//Lấy tất cả các button menu và các thẻ dropdown
var buttons = document.getElementsByClassName('element-item');
var contents = document.getElementsByClassName('element-item-content');

//Lặp qua tất cả các button menu và gán sự kiện
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
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
window.addEventListener("click", function () {
  if (!event.target.matches('.element-item')) {
    for (var i = 0; i < contents.length; i++) {
      contents[i].classList.remove("show");
    }
  }
});

// phần Nghĩa bổ sung (thôi đang bug nên bỏ qua :) )

// nhập khẩu nhân công elementArr
import { elementArr } from "./element database.js";

// gọi class cụ tổ html-element:
let htmlElement = document.querySelector(".html-element");


// for (let a = 0; a < elementArr.length; a++) {
//   // tạo thẻ chứa nút và nội dung
//   let elementContainer = document.createElement("div");
//   elementContainer.className = "element-item-container";
//   // tạo các nút bấm có tên thẻ
//   let elementItem = document.createElement("button");
//   elementItem.className = "element-item";
//   elementItem.value = elementArr[a].id;
//   // tạo các thẻ chứa nội dung
//   let elementContent = document.getElementsByClassName("element-item-content");
//   let tagName = document.createElement("h4");
//   tagName.className = "tag-name";
//   tagName.innerText = "Tên thẻ";
//   let tagMeaning = document.createElement("h4");
//   tagMeaning.className = "tag-meaning";
//   tagMeaning.innerText = "Ý nghĩa"
//   let tagExample = document.createElement("h4");
//   tagExample.className = "tag-example";
//   let tagBrowser = document.createElement("h4");
//   tagBrowser.className = "tag-browser";
//   // gán các thẻ tùm lum ở trên vào html
//   htmlElement.appendChild(elementContainer);
//   elementContainer.appendChild(elementItem);
//   elementItem.append(elementContent);
//   elementContent[a].appendChild(tagName);
//   elementContent[a].appendChild(tagMeaning);
//   elementContent[a].appendChild(tagExample);
//   elementContent[a].appendChild(tagBrowser);
// }




