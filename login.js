
let login = document.getElementById("form")
if (!localStorage.users) {
    localStorage.users = JSON.stringify([]);
}

login.addEventListener("submit", (e) => {
    e.preventDefault();

    let localUsers = JSON.parse(localStorage.users);

    let isExist = false
    for (let users of localUsers) {
        if (users.username === e.target.username.value && users.password === e.target.value.password){
            isExist = true
        }
    }
})
if (isExist = true){
    console.log("sai tên đăng nhâp hoặc mật khẩu")
} else {
    console.log("đăng nhập thành công")
}