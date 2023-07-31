let flag = 0;
slideshow(flag);
function controller(x) { 
    flag = flag + x;
    slideshow(flag);
};
function slideshow(num) { 
    var slides = document.getElementsByClassName('slide');
    for (let y of slides) { 
        y.style.display = "none";
    }
    if (num == slides.length) { 
        flag = 0;
        num = 0;
    }
    if (num < 0) { 
        flag = (slides.length) - 1;
        num = flag;
    }
    slides[num].style.display = "block";
}