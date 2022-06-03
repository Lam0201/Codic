let inputBtn = document.getElementById("signup")
inputBtn.addEventListener("submit", (e) => {
    e.preventDefault()
    let pass = e.target.password.value
    let checkPass = e.target.confirmPassword.value
    if (pass.length < 8) {
        document.getElementById("password-messenger").innerHTML = "Mật Khẩu Phải Từ 8 - 16 Ký Tự"
    }
    if (pass.length > 16) {
        document.getElementById("password-messenger").innerHTML = "Mật Khẩu Phải Từ 8 - 16 Ký Tự"
    }
    if (pass !== checkPass) {
        document.getElementById("password-messenger").innerHTML = "Mật Khẩu Không Chính Xác"
    } else {
        let signup = document.getElementById("signup")
        if (!localStorage.users) {
            localStorage.users = JSON.stringify([]);
        }

        signup.addEventListener("submit", (e) => {
            let localUsers = JSON.parse(localStorage.users)
            localUsers.push({ username: e.target.username.value, password: e.target.password.value })
            localStorage.users = JSON.stringify(localUsers)
            alert("tạo tài khoản thành công")
            document.location.href = "./log in.html"
        })
    }
})

