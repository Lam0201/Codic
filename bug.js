
// THIS BUG IS ON FIREEEEEE
// tạo các biến bug, fire, nút tiếp tục và code của user
let bug = document.getElementById("bug");
let fire = document.getElementById("fire");
let next = document.getElementById("nextStage");
let task = document.getElementById("task");
let userCode = document.getElementById("userCode");

// tạo các cục bug khác màu cho những bàn tiếp theo
let bug2 = document.createElement("i");
bug2.style.color = "yellow";
bug2.style.fontSize = "calc(25px + 3vw)";
bug2.className = "fa-solid fa-bug";
// bug.appendChild(bug2);
let bug3 = document.createElement("i");
bug3.style.color = "green";
bug3.style.fontSize = "calc(25px + 3vw)";
bug3.className = "fa-solid fa-bug";
// bug.appendChild(bug3);
let bug4 = document.createElement("i");
bug4.style.color = "orange";
bug4.style.fontSize = "calc(25px + 3vw)";
bug4.className = "fa-solid fa-bug";
// bug.appendChild(bug4);

// tạo các túi fire khác màu cho những bàn tiếp theo
let fire2 = document.createElement("i");
fire2.style.color = "rgb(238, 238, 98)";
fire2.style.fontSize = "calc(55px + 3vw)";
fire2.className = "fa-solid fa-fire-flame-curved";
// fire.appendChild(fire2);
let fire3 = document.createElement("i");
fire3.style.color = "lightgreen";
fire3.style.fontSize = "calc(55px + 3vw)";
fire3.className = "fa-solid fa-fire-flame-curved";
// fire.appendChild(fire3);
let fire4 = document.createElement("i");
fire4.style.color = "#EC994B";
fire4.style.fontSize = "calc(55px + 3vw)";
fire4.className = "fa-solid fa-fire-flame-curved";
// fire.appendChild(fire4);


function stage1() {
    // ẩn nút tiếp tục khi chưa xong stage này
    next.style.display = "none";
    // nhiệm vụ:
    task.innerText = "Nhiệm vụ: sử dụng flex-box để đưa con bọ vào ngọn lửa đúng màu của chúng"
    // setup các flex cho túi fire trước
    fire.style.display = "flex";
    fire.style.justifyContent = "flex-end";
    let cssfire = fire.style.cssText;
    console.log(fire.style.cssText);
    const winInterval = setInterval(function () {
        bug.style = userCode.value;
        // biến cssbug sẽ luôn lặp lại mỗi 1s để so sánh với biến cssfire (được kết quả từ đầu)
        let cssbug = bug.style.cssText;
        // nếu độ dài lượng css của bug và fire bằng nhau thì thắng
        if (cssbug.length == cssfire.length) {
            next.style.display = "block";
        } else {
            next.style.display = "none";
        }
    }, 1000)
    // cài đặt event chuyển stage cho button
    next.onclick = function () {
        userCode.value = "";
        fire.style.cssText = "";
        // xóa interval cũ đi để tránh bị quá nhiều interval ở các stage sau
        clearInterval(winInterval);
        stage2();
    };
}

function stage2() {
    bug.appendChild(bug2);
    fire.appendChild(fire2);
    fire.style.display = "flex";
    fire.style.flexDirection = "column";
    fire.style.justifyContent = "space-between";
    fire.style.alignItems = "center";
    let cssfire = fire.style.cssText;
    console.log(fire.style.cssText);
    const winInterval = setInterval(function () {
        bug.style = userCode.value;
        // biến cssbug sẽ luôn lặp lại mỗi 1s để so sánh với biến cssfire (được kết quả từ đầu)
        let cssbug = bug.style.cssText;
        // nếu độ dài lượng css của bug và fire bằng nhau thì thắng
        if (cssbug.length == cssfire.length) {
            next.style.display = "block";
        } else {
            next.style.display = "none";
        }
    }, 1000)
    // cài đặt event chuyển stage cho button
    next.onclick = function () {
        userCode.value = "";
        fire.style.cssText = "";
        // xóa interval cũ đi để tránh bị quá nhiều interval ở các stage sau
        clearInterval(winInterval);
        stage3();
    };
}

function stage3() {
    bug.appendChild(bug3);
    fire.appendChild(fire3);
    fire.style.display = "flex";
    fire.style.flexDirection = "column-reverse";
    fire.style.justifyContent = "space-around";
    let cssfire = fire.style.cssText;
    console.log(fire.style.cssText);
    const winInterval = setInterval(function () {
        bug.style = userCode.value;
        // biến cssbug sẽ luôn lặp lại mỗi 1s để so sánh với biến cssfire (được kết quả từ đầu)
        let cssbug = bug.style.cssText;
        // nếu độ dài lượng css của bug và fire bằng nhau thì thắng
        if (cssbug.length == cssfire.length) {
            next.style.display = "block";
        } else {
            next.style.display = "none";
        }
    }, 1000)
    // cài đặt event chuyển stage cho button
    next.onclick = function () {
        userCode.value = "";
        fire.style.cssText = "";
        // xóa interval cũ đi để tránh bị quá nhiều interval ở các stage sau
        clearInterval(winInterval);
        stage4();
    };
}

function stage4() {
    task.innerHTML = "Nhiệm vụ: sử dụng grid để đưa con bọ vào ngọn lửa đúng màu của chúng <br/> Gợi ý: Sử dụng đơn vị fr, chia bảng thành 3 cột"
    fire.style.display = "grid";
    fire.style.gridTemplateColumns = "1fr 1fr 1fr";
    let cssfire = fire.style.cssText;
    console.log(fire.style.cssText);
    const winInterval = setInterval(function () {
        bug.style = userCode.value;
        // biến cssbug sẽ luôn lặp lại mỗi 1s để so sánh với biến cssfire (được kết quả từ đầu)
        let cssbug = bug.style.cssText;
        // nếu độ dài lượng css của bug và fire bằng nhau thì thắng
        if (cssbug.length == cssfire.length) {
            next.style.display = "block";
        } else {
            next.style.display = "none";
        }
    }, 1000)
    // cài đặt event chuyển stage cho button
    next.onclick = function () {      
        userCode.value = "";
        fire.style.cssText = "";
        // xóa interval cũ đi để tránh bị quá nhiều interval ở các stage sau
        clearInterval(winInterval);
        stage5();
    };
}
function stage5() {
    task.innerHTML = "Nhiệm vụ: sử dụng grid để đưa con bọ vào ngọn lửa đúng màu của chúng <br/> Gợi ý: Sử dụng đơn vị fr, chia bảng thành 2 cột"
    fire.style.display = "grid";
    fire.style.gridTemplateColumns = "1fr 1fr";
    let cssfire = fire.style.cssText;
    console.log(fire.style.cssText);
    const winInterval = setInterval(function () {
        bug.style = userCode.value;
        // biến cssbug sẽ luôn lặp lại mỗi 1s để so sánh với biến cssfire (được kết quả từ đầu)
        let cssbug = bug.style.cssText;
        // nếu độ dài lượng css của bug và fire bằng nhau thì thắng
        if (cssbug.length == cssfire.length) {
            next.style.display = "block";
        } else {
            next.style.display = "none";
        }
    }, 1000)
    // cài đặt event chuyển stage cho button
    next.onclick = function () {
        userCode.value = "";
        fire.style.cssText = "";
        // xóa interval cũ đi để tránh bị quá nhiều interval ở các stage sau
        clearInterval(winInterval);
        stage6();
    };
}
function stage6() {
    task.innerHTML = "Nhiệm vụ: sử dụng grid để đưa con bọ vào ngọn lửa đúng màu của chúng <br/> Gợi ý: Sử dụng đơn vị fr, chia bảng thành 3 hàng"
    fire.style.display = "grid";
    fire.style.gridTemplateRows = "1fr 1fr 1fr";
    let cssfire = fire.style.cssText;
    console.log(fire.style.cssText);
    const winInterval = setInterval(function () {
        bug.style = userCode.value;
        // biến cssbug sẽ luôn lặp lại mỗi 1s để so sánh với biến cssfire (được kết quả từ đầu)
        let cssbug = bug.style.cssText;
        // nếu độ dài lượng css của bug và fire bằng nhau thì thắng
        if (cssbug.length == cssfire.length) {
            next.style.display = "block";
        } else {
            next.style.display = "none";
        }
    }, 1000)
    // cài đặt event chuyển stage cho button
    next.onclick = function () {
        userCode.value = "";
        fire.style.cssText = "";
        // xóa interval cũ đi để tránh bị quá nhiều interval ở các stage sau
        clearInterval(winInterval);
        stage7();
    };
}
function stage7() {
    task.innerHTML = "Nhiệm vụ: sử dụng grid để đưa con bọ vào ngọn lửa đúng màu của chúng <br/> Gợi ý: Sử dụng đơn vị fr, chia bảng thành 2 cột"
    bug.appendChild(bug4);
    fire.appendChild(fire4);
    fire.style.display = "grid";
    fire.style.gridTemplateColumns = "1fr 1fr";
    let cssfire = fire.style.cssText;
    console.log(fire.style.cssText);
    const winInterval = setInterval(function () {
        bug.style = userCode.value;
        // biến cssbug sẽ luôn lặp lại mỗi 1s để so sánh với biến cssfire (được kết quả từ đầu)
        let cssbug = bug.style.cssText;
        // nếu độ dài lượng css của bug và fire bằng nhau thì thắng
        if (cssbug.length == cssfire.length) {
            next.style.display = "block";
        } else {
            next.style.display = "none";
        }
    }, 1000)
    // cài đặt event chuyển stage cho button
    next.onclick = function () {
        userCode.value = "";
        fire.style.cssText = "";
        // xóa interval cũ đi để tránh bị quá nhiều interval ở các stage sau
        clearInterval(winInterval);
        stage8();
    };
}
function stage8() {
    task.innerHTML = "Nhiệm vụ: sử dụng grid để đưa con bọ vào ngọn lửa đúng màu của chúng <br/> Gợi ý: Sử dụng đơn vị fr, chia bảng thành 3 cột"
    fire.style.display = "grid";
    fire.style.gridTemplateRows = "1fr 1fr 1fr ";
    let cssfire = fire.style.cssText;
    console.log(fire.style.cssText);
    const winInterval = setInterval(function () {
        bug.style = userCode.value;
        // biến cssbug sẽ luôn lặp lại mỗi 1s để so sánh với biến cssfire (được kết quả từ đầu)
        let cssbug = bug.style.cssText;
        // nếu độ dài lượng css của bug và fire bằng nhau thì thắng
        if (cssbug.length == cssfire.length) {
            next.style.display = "block";
        } else {
            next.style.display = "none";
        }
    }, 1000)
    // cài đặt event chuyển stage cho button
    next.onclick = function () {
        userCode.value = "";
        fire.style.cssText = "";
        // xóa interval cũ đi để tránh bị quá nhiều interval ở các stage sau
        clearInterval(winInterval);
        return;
    };
}

// khởi chạy stage1, sau khi hoàn thành từng stage sẽ lần lượt ra stage tiếp 
stage1();