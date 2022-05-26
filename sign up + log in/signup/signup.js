let signup = document.getElementById("signup")
if (!localStorage.user) {
    localStorage.users = JSON.stringify([]);
}

// function verifyPassword() {
//     let pass = document.getElementById"password".value
//     let checkPass = document.getElementById"confirmPassword".value
//     if (pass !== checkPass) {
//         document.getElementById"messPass".innerHTML = "Mật Khẩu Không Chính Xác"
//     }
//     if (pass.length < 8) {
//         document.getElementById"messPass".innerHTML = "Mật Khẩu Phải Từ 8 - 16 Ký Tự"
//     }
//     if (pass.length > 16) {
//         document.getElementById"messPass".innerHTML = "Mật Khẩu Phải Từ 8 - 16 Ký Tự"
//     }
// }
signup.addEventListener("submit", (e) => {
    e.preventDefault()

    let localUser = JSON.parse(localStorage.user)
    localUser.push({ username: e.target.username.value, password: e.target.password.value })
    localStorage.user = JSON.stringify(localUser)


    console.log(e.target.username.value)
    console.log(e.target.password.value)
})
