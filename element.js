// nhập khẩu nhân công elementArr
import { elementArr } from "./element database.js";
// gọi class cụ tổ html-element:
let htmlElement = document.querySelector(".html-element");

function allTag () {
  for (let a = 0; a < elementArr.length; a++) {
    // tạo thẻ chứa nút và nội dung
    let elementContainer = document.createElement("div");
    elementContainer.className = "element-item-container";
    // tạo các nút bấm có tên thẻ
    let elementItem = document.createElement("button");
    elementItem.className = "element-item";
    elementItem.value = elementArr[a].id;
    elementItem.innerText = elementArr[a].name;
    // tạo thẻ chứa các nội dung
    let elementContent = document.createElement("div");
    elementContent.className = "element-item-content";
    elementContent.setAttribute("id", elementArr[a].id);
    // tạo các nội dung
      // thẻ name
      let tagName = document.createElement("h4");
      tagName.className = "tag-name";
      tagName.innerText = "Tên thẻ";
      let tagNameContent = document.createElement("p");
      tagNameContent.className = "name";
      tagNameContent.innerText = elementArr[a].id;
      // thẻ meaning
      let tagMeaning = document.createElement("h4");
      tagMeaning.className = "tag-meaning";
      tagMeaning.innerText = "Ý nghĩa";
      let tagMeaningContent = document.createElement("p");
      tagMeaningContent.className = "meaning";
      tagMeaningContent.innerText = elementArr[a].meaning;
      // thẻ example
      let tagExample = document.createElement("h4");
      tagExample.className = "tag-example";
      tagExample.innerText = "Ví dụ";
      let tagExampleContent = document.createElement("p");
      tagExampleContent.className = "example";
      tagExampleContent.innerText = elementArr[a].example;
      // thẻ browser
      let tagBrowser = document.createElement("h4");
      tagBrowser.className = "tag-browser";
      tagBrowser.innerText = "Trình duyệt";
      let tagBrowserContent = document.createElement("p");
      tagBrowserContent.className = "browser";
      tagBrowserContent.innerHTML = elementArr[a].example;
    // gán các thẻ tùm lum ở trên vào html
    htmlElement.appendChild(elementContainer);
    elementContainer.appendChild(elementItem);
    elementContainer.appendChild(elementContent);
    elementContent.appendChild(tagName);
    elementContent.appendChild(tagNameContent);
    elementContent.appendChild(tagMeaning);
    elementContent.appendChild(tagMeaningContent);
    elementContent.appendChild(tagExample);
    elementContent.appendChild(tagExampleContent);
    elementContent.appendChild(tagBrowser);
    elementContent.appendChild(tagBrowserContent);
  }
}
allTag();

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






