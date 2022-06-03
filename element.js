// nhập khẩu nhân công elementArr
import { elementArr, cssArr } from "./element database.js";
// gọi class cụ tổ html-element:
let htmlElement = document.querySelectorAll(".html-element");

function allHTMLTag () {
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
      // một vài thẻ tag sẽ ko hiển thị trên trình duyệt nên ta sẽ xét chúng qua object ahihi =)))))
      if (elementArr[a].ahihi == "hidden") {
      tagBrowserContent.innerHTML = "Nothing will be shown";
      }  
    // gán các thẻ tùm lum ở trên vào html
    htmlElement[0].appendChild(elementContainer);
    elementContainer.appendChild(elementItem);
    elementContainer.appendChild(elementContent);
    elementContent.appendChild(tagMeaning);
    elementContent.appendChild(tagMeaningContent);
    elementContent.appendChild(tagExample);
    elementContent.appendChild(tagExampleContent);
    elementContent.appendChild(tagBrowser);
    elementContent.appendChild(tagBrowserContent);    
  }
}
allHTMLTag();

function allCSSTag () {
  for (let a = 0; a < cssArr.length; a++) {
    // tạo thẻ chứa nút và nội dung
    let elementContainer = document.createElement("div");
    elementContainer.className = "element-item-container";
    // tạo các nút bấm có tên thẻ
    let elementItem = document.createElement("button");
    elementItem.className = "element-item";
    elementItem.value = cssArr[a].id;
    elementItem.innerText = cssArr[a].id;
    // tạo thẻ chứa các nội dung
    let elementContent = document.createElement("div");
    elementContent.className = "element-item-content";
    elementContent.setAttribute("id", cssArr[a].id);
    // tạo các nội dung
      // thẻ meaning
      let tagMeaning = document.createElement("h4");
      tagMeaning.className = "tag-meaning";
      tagMeaning.innerText = "Ý nghĩa";
      let tagMeaningContent = document.createElement("p");
      tagMeaningContent.className = "meaning";
      tagMeaningContent.innerText = cssArr[a].meaning;
      // thẻ definition
      let tagDefinition = document.createElement("h4");
      tagDefinition.className = "tag-definition";
      tagDefinition.innerText = "Định nghĩa";
      let tagDefinitionContent = document.createElement("p");
      tagDefinitionContent.className = "definition";
      tagDefinitionContent.innerHTML = cssArr[a].definition;
      // thẻ example
      let tagExample = document.createElement("h4");
      tagExample.className = "tag-example";
      tagExample.innerText = "Ví dụ";
      let tagExampleContent = document.createElement("p");
      tagExampleContent.className = "example";
      tagExampleContent.innerText = cssArr[a].example;
    // gán các thẻ tùm lum ở trên vào html
    htmlElement[1].appendChild(elementContainer);
    elementContainer.appendChild(elementItem);
    elementContainer.appendChild(elementContent);
    elementContent.appendChild(tagMeaning);
    elementContent.appendChild(tagMeaningContent);
    elementContent.appendChild(tagDefinition);
    elementContent.appendChild(tagDefinitionContent);
    elementContent.appendChild(tagExample);
    elementContent.appendChild(tagExampleContent);    
  }
}
allCSSTag();

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






