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

    function data(result, word){
        if(result.title){
            infoText.innerHTML = `Can't find the meaning of <span>"${word}"</span>. Please, try to search for another word.`;
        }else{
            wrapper.classList.add("active");
            let definitions = result[0].meanings[0].definitions[0],
            phontetics = `${result[0].meanings[0].partOfSpeech}  /${result[0].phonetics[0].text}/`;
            document.querySelector(".word p").innerText = result[0].word;
            document.querySelector(".word span").innerText = phontetics;
            document.querySelector(".meaning span").innerText = definitions.definition;
            document.querySelector(".example span").innerText = definitions.example;
            let phonetics = result[0].phonetics
            for (let e of phonetics) {
                if (e.audio != "") {
                    audio = new Audio(e.audio);
                }
            }
            if(definitions.synonyms[0] == undefined){
                synonyms.parentElement.style.display = "none";
            }else{
                synonyms.parentElement.style.display = "block";
                synonyms.innerHTML = "";
                for (let i = 0; i < 5; i++) {
                    let tag = `<span onclick="search('${definitions.synonyms[i]}')">${definitions.synonyms[i]},</span>`;
                    tag = i == 4 ? tag = `<span onclick="search('${definitions.synonyms[i]}')">${definitions.synonyms[4]}</span>` : tag;
                    synonyms.insertAdjacentHTML("beforeend", tag);
                }
            }
        }
    }