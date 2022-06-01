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
// lưu nội dung từ tiếng anh của các thẻ vào array
let listArrText = ["color", "background-color", "margin", "border", "padding", "font-family", "font-size", "font-weight"];
// lưu nội dung dịch nghĩa của các thẻ vào array
let boardArrText = [": màu chữ", ": màu nền", ": khoảng trống ngoài viền", ": viền", ": đệm", ": phông chữ", ": cỡ chữ", ": độ dày chữ"];
// lưu tên id của các ô trống vào array (giống listArrText)
let blankIdText = listArrText;
// đây là số từ sẽ xuất hiện:
const number = 4;
// đây là từ được kéo, hiện tại ta để mặc định là null
let draggedItem = null;

function GamePlay() {
    shuffleWord();
    appearedWord();
    shuffleMeaning();
    appearedMeaning();
    dragNdrop();
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
        let blank = board.children[i].children[0];
        
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
        blank.addEventListener("dragover", function(event) {
            event.preventDefault();
        })

        // event Drag End: thả vật đc kéo ra
        item.addEventListener("dragend", function () {
            // thả thẻ item ra thì hiện lại
            setTimeout(function() {
                item.style.display = "inline";
            }, 0)
            // nếu gán được vào thẻ cha có tên là blank thì thẻ từ tiếng anh này ko drag được nữa
            if (item.parentNode.className == "blank") {
                item.setAttribute("draggable", false);
            }
        })

        // event Drop: vật được kéo lắp vào ô trống
        blank.addEventListener("drop", function(event) {
            // sử dụng event.dataTransfer.getData() để lấy giá trị của vật được thả từ bộ nhớ tạm,
            // event.target. để lấy giá trị của target
            let dropped = event.target.getAttribute("id");
            let dragged = event.dataTransfer.getData("texts");
            // nếu id ô trống giống với nội dung thẻ từ tiếng anh thì mới gán từ vào ô trống
            if (dragged == dropped) {
                // nếu prepend item thì sẽ bị sai vì có thể bộ đếm for sẽ đếm giá trị i của blank - ô được thả từ vào. và nó khả năng cao sẽ khác với giá trị i của item
                blank.prepend(draggedItem);
                blank.style.padding = "0";
            }
        })
    }
}
function countDownClock() {
    let clock = document.getElementById("time");
    let now = new Date().setTime(10);
    let countDown = setInterval(function() {
        clock.innerHTML = now;
        now -= 1;
        now = checkTime(now);
    }, 1000)

    function checkTime(now) {
        if (now < 0) {
            clock.innerHTML = "HẾT GIỜ !!!";
            for (i = 0; i < number; i++) {
                lists.children[i].setAttribute("draggable", false);
            }
            clearInterval(countDown);
        }
        return now;
    }
}

GamePlay();







