let contact = document.getElementById("contact")
console.log(contact);
if (!localStorage.feedBack) {
    localStorage.feedBack = JSON.stringify([]);
}
contact.addEventListener("submit", (e) => {
    let localFeedBack = JSON.parse(localStorage.feedBack)
    localFeedBack.push({ email: e.target.email.value, feedBack: e.target.feedBack.value })
    localStorage.feedBack = JSON.stringify(localFeedBack)
    alert(" Cảm ơn bạn đã góp ý. Chúng tôi sẽ phản hồi trong thời gian sớm nhất")
})
