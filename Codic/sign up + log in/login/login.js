
let login = document.getElementById("login")
if (!localStorage.user) {
    localStorage.users = JSON.stringify([]);
}

login.addEventListener("submit", (e) => {
    e.preventDefault();

    let localUser = JSON.parse(localStorage.user);

    let isExist = false
    for (let user of localUser) {
        if (user.username === e.target.username.value && user.password === e.target.value.password){
            isExist = true
        }
    }
})
if (isExist){
    console.log("sai tên đăng nhâp hoặc mật khẩu")
} else {
    console.log("đăng nhập thành công")
}