var toggle = document.querySelector(".fa-solid");
var heder=document.querySelector(".header");
var heder1  = document.querySelector(".header1");
toggle.addEventListener("click", () => {
        heder1.style.display = "block";
        heder.style.opacity = "0.2";
});
var close = document.querySelector(".bt1");
close.addEventListener("click", () => {
    heder1.style.display = "none";
    heder.style.opacity = "1";
});