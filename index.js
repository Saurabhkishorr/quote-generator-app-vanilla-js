const apiURL = "https://api.quotable.io/random";
let cardtitle = document.querySelector(".card-title");
let underline = document.querySelector(".border-primary");
let quote = document.querySelector(".card-text");
let author = document.querySelector(".text-end");
let btn2 = document.getElementById("btn2");


let generatequote = async()=>{
    try {
       cardtitle.style.display = "block";
       underline.style.display = "block";
       const response = await fetch(apiURL);
       var data = await response.json();
       btn2.style.display = "block";

       quote.innerHTML = `" ${data.content}"`;
       author.innerHTML = "&#x2015; " + data.author;

    } catch (error) {
        quote.innerHTML = `Network Error`;
    }
}

btn2.addEventListener("click",(e)=>{
   let url = "https://twitter.com/intent/tweet?text="+ quote.innerHTML + author.innerHTML;
   window.open(url,"tweet window","width=600, height=300");
})