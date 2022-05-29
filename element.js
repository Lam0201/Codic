// Set random bgr change after 1min
window.onload = function () {
    var backgroundImg = ["Asset/Background/Dic bgr/dic bgr 1.jpg",
    "Asset/Background/Dic bgr/dic bgr 2.jpg",
    "Asset/Background/Dic bgr/dic bgr 3.jpg",
    "Asset/Background/Dic bgr/dic bgr 4.jpg",
    "Asset/Background/Dic bgr/dic bgr 5.jpg",
    "Asset/Background/Dic bgr/dic bgr 6.jpg",
    "Asset/Background/Dic bgr/dic bgr 7.jpg",
    "Asset/Background/Dic bgr/dic bgr 8.jpg",
    "Asset/Background/Dic bgr/dic bgr 9.jpg",
    "Asset/Background/Dic bgr/dic bgr 10.jpg",
    "Asset/Background/Dic bgr/dic bgr 11.jpg",
    "Asset/Background/Dic bgr/dic bgr 12.jpg",
    "Asset/Background/Dic bgr/dic bgr 13.jpg",
    "Asset/Background/Dic bgr/dic bgr 14.jpg",
    "Asset/Background/Dic bgr/dic bgr 15.jpg",
    "Asset/Background/Dic bgr/dic bgr 16.jpg",
    "Asset/Background/Dic bgr/dic bgr 17.jpg",
    "Asset/Background/Dic bgr/dic bgr 18.jpg",
    "Asset/Background/Dic bgr/dic bgr 19.jpg",
    "Asset/Background/Dic bgr/dic bgr 20.jpg",
    "Asset/Background/Dic bgr/dic bgr 21.jpg",
    "Asset/Background/Dic bgr/dic bgr 22.jpg",
    "Asset/Background/Dic bgr/dic bgr 23.jpg",
    "Asset/Background/Dic bgr/dic bgr 24.jpg",
    "Asset/Background/Dic bgr/dic bgr 25.jpg",
    "Asset/Background/Dic bgr/dic bgr 26.jpg",
    "Asset/Background/Dic bgr/dic bgr 27.jpg",
    "Asset/Background/Dic bgr/dic bgr 28.jpg",
    "Asset/Background/Dic bgr/dic bgr 29.jpg",
    "Asset/Background/Dic bgr/dic bgr 30.jpg",
    "Asset/Background/Dic bgr/dic bgr 31.jpg",
    "Asset/Background/Dic bgr/dic bgr 32.jpg",
    "Asset/Background/Dic bgr/dic bgr 33.jpg",
    "Asset/Background/Dic bgr/dic bgr 34.jpg",
    "Asset/Background/Dic bgr/dic bgr 35.jpg",
    "Asset/Background/Dic bgr/dic bgr 36.jpg",
    "Asset/Background/Dic bgr/dic bgr 37.jpg",
    "Asset/Background/Dic bgr/dic bgr 38.jpg",
    "Asset/Background/Dic bgr/dic bgr 39.jpg",
    "Asset/Background/Dic bgr/dic bgr 40.jpg",
    "Asset/Background/Dic bgr/dic bgr 41.jpg",
    "Asset/Background/Dic bgr/dic bgr 42.jpg",
    "Asset/Background/Dic bgr/dic bgr 43.jpg",
    "Asset/Background/Dic bgr/dic bgr 44.jpg"
    ];

    setInterval(changeImage, 60000);
    function changeImage() {   
        var i = Math.floor((Math.random() * 43));
        document.body.style.backgroundImage = "url('"+backgroundImg[i]+"')";
    }
   }

//ELEMENT DICTIONARY
//Gọi biến
const wrapper = document.querySelector(".wrapper"),
    searchInput = wrapper.querySelector("input"),
    infoText = wrapper.querySelector(".info-text"),
    standfor = wrapper.querySelector(".standfor"),
    meaning = wrapper.querySelector(".meaning"),
    example = wrapper.querySelector(".example"),
    browser = wrapper.querySelector(".browser"),
    removeIcon = wrapper.querySelector(".search span");

function data(result, element){
    if(result.title){
        infoText.innerHTML = `Can't find the meaning of <span>"${element}"</span>. Please, try to search for another word.`;
    }else{
        wrapper.classList.add("active");

        for (let i=o; i < html-element.length -1; i++){
            if (searchInput == html-element.element){
                document.querySelector(".element p").innerText = html-element[i].element;
                document.querySelector(".standfor span").innerText =html-element[i].standfor;
                document.querySelector(".meaning span").innerText = html-element[i].meaning;
                document.querySelector(".example span").innerText = html-element[i].example;
                document.querySelector(".browser span").innerhtml = '${html-element[i].example}'
            }
        }
    }
}

function search(word){
    fetchApi(word);
    searchInput.value = word;
}

function fetchApi(word){
    wrapper.classList.remove("active");
    infoText.style.color = "#000";
    infoText.innerHTML = `Searching the meaning of <span>"${word}"</span>`;
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}  `;
    fetch(url).then(response => response.json()).then(result => data(result, word)).catch(() =>{
        infoText.innerHTML = `Can't find the meaning of <span>"${word}"</span>. Please, try to search for another word.`;
    });
}