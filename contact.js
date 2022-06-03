let contact = document.getElementById("contact")
if (!localStorage.feedBack) {
    localStorage.feedBack = JSON.stringify([]);
}
contact.addEventListener("submit", (e) => {
    e.preventDefault()
    let localFeedBack = JSON.parse(localStorage.feedBack)
    localFeedBack.push({ email: e.target.email.value, feedBack: e.target.feedBack.value })
    localStorage.feedBack = JSON.stringify(localFeedBack)
})