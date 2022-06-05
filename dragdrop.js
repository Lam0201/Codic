// nhập khẩu nhân công elementArr
import { elementArr, cssArr, jsArr } from "./element database.js";

// gọi thẻ cụ tổ trò chơi
let game = document.querySelector(".dragdrop-game");
// gọi thẻ cụ tổ lựa chọn
let selection = document.querySelector(".selection");
// gọi danh sách chứa các thẻ từ tiếng anh
let lists = document.querySelector(".Lists");
// lưu các thẻ p có tên class là css vào array listArr
let listArr = new Array();
// gọi bảng chứa các dịch nghĩa + ô trống để điền từ tiếng anh vào
let board = document.querySelector(".board1");
// lưu các thẻ p có tên class là meaning vào array boardArr
let boardArr = new Array();
// lưu các từ tiếng anh (tương đương id ô trống dịch nghĩa) sẽ xuất hiện vào array appeared
let appeared = new Array();
// gọi các nút bấm chọn chế độ chơi html/css/js:
let htmlButton = document.getElementById("html");
let cssButton = document.getElementById("css");
let jsButton = document.getElementById("js");
// lưu nội dung từ tiếng anh của các thẻ vào array
let listArrText = new Array();
// lưu nội dung dịch nghĩa của các thẻ vào array
let boardArrText = new Array();
// lưu tên id của các ô trống vào array (giống listArrText)
let blankIdText = listArrText;
// đây là số từ sẽ xuất hiện:
let number = 4;
// đây là thời gian để drag từ vào ô trống:
let dragTime = 10;
// đây là từ được kéo, hiện tại ta để mặc định là null
let draggedItem = null;
// gọi phần nhiệm vụ người dùng khi chơi trò chơi:
let mission = document.querySelector(".center");
// gọi thời gian đếm ngược
let countDown;

// chọn chế độ chơi game
htmlButton.addEventListener("click", function () {
    for (let count = 0; count < elementArr.length; count++) {
        listArrText[count] = elementArr[count].name;
    }
    for (let count = 0; count < elementArr.length; count++) {
        boardArrText[count] = elementArr[count].meaning;
    }
    selection.style.display = "none";
    game.style.display = "block";
    GamePlay();
})
cssButton.addEventListener("click", function () {
    for (let count = 0; count < cssArr.length; count++) {
        listArrText[count] = cssArr[count].name;
    }
    for (let count = 0; count < cssArr.length; count++) {
        boardArrText[count] = cssArr[count].meaning;
    }
    selection.style.display = "none";
    game.style.display = "block";
    GamePlay();
})
jsButton.addEventListener("click", function () {
    for (let count = 0; count < jsArr.length; count++) {
        listArrText[count] = jsArr[count].name;
    }
    for (let count = 0; count < jsArr.length; count++) {
        boardArrText[count] = jsArr[count].meaning;
    }
    selection.style.display = "none";
    game.style.display = "block";
    GamePlay();
})

// chơi !
function GamePlay() {
    shuffleWord();
    appearedWord();
    shuffleMeaning();
    appearedMeaning();
    dragNdrop();
    mission.innerText = "Bạn có " + dragTime + " giây để điền các từ vào đúng ô trống";
    countDownClock();
}
function shuffleWord() {
    // thêm các dòng <p> này vào mảng array listArr
    for (let a = 0; a < listArrText.length; a++) {
        // tạo các thẻ từ tiếng anh
        let css = document.createElement("p");
        css.className = "css";
        css.draggable = "true";
        css.innerText = listArrText[a];
        listArr[a] = css;
    }
    // shuffle các thành phần trong mảng array listArr
    for (let c = listArrText.length - 1; c > 0; c--) {
        // liên tục đảo vị trí 2 thành phần được gọi trong mảng trong suốt vòng lặp
        const i = Math.floor(Math.random() * (c + 1));
        let temp = listArr[c];
        listArr[c] = listArr[i];
        listArr[i] = temp;
    }
}
function appearedWord() {
    // bổ sung các thành phần trong mảng array listArr này vào html
    for (let d = 0; d < number; d++) {
        lists.appendChild(listArr[d]);
        appeared[d] = listArr[d].innerText;
    }
}
function shuffleMeaning() {
    // thêm các dòng <p> này vào mảng array boardArr
    for (let b = 0; b < boardArrText.length; b++) {
        // tạo các dịch nghĩa
        let meaning = document.createElement("p");
        meaning.className = "meaning";
        meaning.innerText = boardArrText[b];
        // tạo các ô trống đi kèm với dịch nghĩa
        let blank = document.createElement("span");
        blank.className = "blank";
        blank.setAttribute("id", blankIdText[b]);
        meaning.prepend(blank);
        boardArr[b] = meaning;
    }
    // shuffle các thành phần trong mảng array boardArr
    for (let c = boardArrText.length - 1; c > 0; c--) {
        const i = Math.floor(Math.random() * (c + 1));
        const temp = boardArr[c];
        boardArr[c] = boardArr[i];
        boardArr[i] = temp;
    }
}
function appearedMeaning() {
    // bổ sung các thành phần trong mảng array boardArr này vào html
    for (let d = 0; d < boardArrText.length; d++) {
        // gọi đúng vị trị id ô trống của thẻ dịch nghĩa (chưa add vào html)
        let blankId = boardArr[d].children[0].getAttribute("id");
        for (let e = 0; e < number; e++) {
            let word = appeared[e];
            // nếu id giống với từ tiếng anh thì mới thêm thành phần mảng boardArr vào html
            if (blankId == word) {
                board.appendChild(boardArr[d]);
            }
        }
    }
}
function dragNdrop() {
    for (let i = 0; i < number; i++) {
        let item = lists.children[i];
        let blank = board.querySelectorAll(".blank")[i];

        // event Drag Start: bắt đầu kéo
        item.addEventListener("dragstart", function (event) {
            // từ được kéo draggedItem sẽ là từ được chọn bởi event dragStart
            draggedItem = item;
            // sử dụng event.dataTransfer.setData để lưu 1 giá trị của vật được kéo vào bộ nhớ tạm
            event.dataTransfer.setData("texts", event.target.innerText);
            // dùng setTimeout để trì hoãn việc item biến mất ngay khi kéo đi, dẫn đến việc ko thấy thanh kéo dạng mờ
            setTimeout(function () {
                item.style.display = "none";
            }, 0)
        })

        // event Drag Over: kéo đến nơi
        blank.addEventListener("dragover", function (event) {
            event.preventDefault();
        })

        // event Drag End: thả vật đc kéo ra
        item.addEventListener("dragend", function () {
            // thả thẻ item ra thì hiện lại
            setTimeout(function () {
                item.style.display = "inline";
            }, 0)
            // nếu gán được vào thẻ cha có tên là blank thì thẻ từ tiếng anh này ko drag được nữa
            if (item.parentNode.className == "blank") {
                item.setAttribute("draggable", false);
            }
        })

        // event Drop: vật được kéo lắp vào ô trống
        blank.addEventListener("drop", function (event) {
            // sử dụng event.dataTransfer.getData() để lấy giá trị của vật được thả từ bộ nhớ tạm,
            // event.target. để lấy giá trị của target
            let dropped = event.target.getAttribute("id");
            let dragged = event.dataTransfer.getData("texts");
            // nếu id ô trống giống với nội dung thẻ từ tiếng anh thì mới gán từ vào ô trống
            if (dragged == dropped) {
                // nếu prepend item thì sẽ bị sai vì có thể bộ đếm for sẽ đếm giá trị i của blank - ô được thả từ vào. và nó khả năng cao sẽ khác với giá trị i của item
                blank.prepend(draggedItem);
                blank.style.padding = "5px 0px 5px 0px";
                item.style.padding = "5px";
            }
        })
    }
}
function countDownClock() {
    console.log(number);
    // gọi id nút tiếp tục
    let next = document.getElementById("nextStage");
    // ẩn display nút tiếp tục
    next.style.display = "none";
    // gọi id nút chơi lại
    let retry = document.getElementById("retry");
    // ẩn display nút chơi lại
    retry.style.display = "none";
    // gọi id thời gian
    let clock = document.getElementById("time");
    // đặt thời gian làm bài 
    let now = new Date().setTime(dragTime);
    // đếm ngược thời gian về 0
    countDown = setInterval(function () {
        clock.innerHTML = now;
        now -= 1;
        now = checkTime(now);
    }, 1000)
    // check xem thời gian về 0 chưa
    function checkTime(now) {
        if (now < 0) {
            clock.innerHTML = "HẾT GIỜ !!!";
            for (let i = 0; i < lists.children.length; i++) {
                lists.children[i].setAttribute("draggable", false);
            }
            clearInterval(countDown);
            if (lists.children.length == 0) {
                alert("chúc mừng! Bạn đã thắng màn chơi này rồi !");
                next.style.display = "block";
            } else {
                alert("Bạn thua mất rồi.. Hãy cố gắng hơn lần sau nhé ! ");
                retry.style.display = "block";
            }
        }
        return now;
    }
    // cài đặt chức năng nút tiếp tục
    next.onclick = nextLevel;
    // cài đặt chức năng nút chơi lại
    retry.onclick = retryGame;

}
function nextLevel() {
    while (board.hasChildNodes()) {
        board.removeChild(board.firstChild);
    }
    if (number < listArrText.length) {
        number++;
        dragTime += 2;
    }

    GamePlay();
}
function retryGame() {
    while (board.hasChildNodes()) {
        board.removeChild(board.firstChild);
    }
    while (lists.hasChildNodes()) {
        lists.removeChild(lists.firstChild);
    }
    if (number > 4) {
        number--;
        dragTime -= 2;
    } else {
        number = 4;
        dragTime = 10;
    }

    GamePlay();
}








