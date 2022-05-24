// let signup = document.getElementById("signup")
// if (!localStorage.user) {
//     localStorage.users = JSON.stringify([]);
// }
// signup.addEventListener("submit", (e) => {
//     e.preventDefault()
//     let localUser = JSON.parse(localStorage.user)
//     localUser.push({ username: e.target.username.value, password: e.target.password.value, checkPassword: e.target.confirmPassword.value })
//     localStorage.user = JSON.stringify(localUser)
//     console.log(e.target.username.value)
//     console.log(e.target.password.value)
function verifyPassword( e ) {
        e.preventDefault()

    let password = document.getElementById("password").value;
    let checkPassword = document.getElementById("confirmPassword").value;

    if (password !== checkPassword) {
        document.getElementById("passMess").innerHTML = "Mật Khẩu Không Chính Xác";
        return false;
    }
    if (password.length > 16) {
        document.getElementsById("passMess").innerHTML = "Mật Khẩu Phải Từ 8 - 16 Ký Tự";
        return false;
    }
    if (password.length < 4) {
        document.getElementsById("passMess").innerHTML = "Mật Khẩu Phải Từ 8 - 16 Ký Tự";
        return false;
    } else {
        return alert = ("OK");
    }
}
// })
