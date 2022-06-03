let login = document.getElementById("login")
if (!localStorage.users) {
    localStorage.users = JSON.stringify([]);
}

login.addEventListener("submit", (e) => {
    e.preventDefault();

    let localUsers = JSON.parse(localStorage.users);

    for (let users of localUsers) {
        if (users.username === e.target.username.value && users.password === e.target.password.value) {
            alert("chào mừng bạn đến với Codic")
            document.location.href = "./index.html"
        } else {
            document.getElementById("password-messenger").innerHTML = "tên đăng nhập hoặc mật khẩu không đúng"
        }
    }
})