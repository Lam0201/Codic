let inputBtn = document.getElementsByClassName("signup")
inputBtn.addEventListener("click", (e) => {
    e.preventDefault()
    let pass = document.getElementById("password").value
    let checkPass = document.getElementById("confirm-password").value
    if (pass !== checkPass) {
        document.getElementById("password-messenger").innerHTML = "Mật Khẩu Không Chính Xác"
    }
    if (pass.length < 8) {
        document.getElementById("password-messenger").innerHTML = "Mật Khẩu Phải Từ 8 - 16 Ký Tự"
    }
    if (pass.length > 16) {
        document.getElementById("password-messenger").innerHTML = "Mật Khẩu Phải Từ 8 - 16 Ký Tự"
    }
    console.log(pass);
    console.log(checkPass);
})
let signup = document.getElementsByClassName("signup")
if (!localStorage.users) {
    localStorage.users = JSON.stringify([]);
}

signup.addEventListener("submit", (e) => {
    let localUsers = JSON.parse(localStorage.users)
    localUsers.push({ username: e.target.username.value, password: e.target.password.value, checkPass: e.target.confirmPassword.value })
    localStorage.users = JSON.stringify(localUsers)
})
fun