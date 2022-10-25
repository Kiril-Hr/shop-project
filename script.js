let offset = 0;
const slider = document.querySelector('.slider');
const sliderSq1 = document.querySelector('.slider-square-1')
const sliderSq2 = document.querySelector('.slider-square-2')
const sliderSq3 = document.querySelector('.slider-square-3')
const sliderSq4 = document.querySelector('.slider-square-4')

document.querySelector('.slider-next').addEventListener('click', function(){
    offset += 1200;
    if (offset > 3601) {
        offset = 0;
    }
    slider.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function(){
    offset -= 1200;
    if (offset < 0) {
        offset = 0;
    }
    slider.style.left = -offset + 'px';
});

document.querySelector('.slider-next').addEventListener('click',function sliderSq(offset) {
    if (offset = 0) {
        sliderSq1.style.backgroundColor = "white";
        sliderSq2.style.backgroundColor = "transparent";
        sliderSq3.style.backgroundColor = "transparent";
        sliderSq4.style.backgroundColor = "transparent";
    }
    if (offset = 1200) {
        sliderSq1.style.backgroundColor = "transparent";
        sliderSq2.style.backgroundColor = "white";
    }
    if (offset = 2400) {
        sliderSq1.style.backgroundColor = "transparent";
        sliderSq2.style.backgroundColor = "transparent";
        sliderSq3.style.backgroundColor = "white";
    }
    if (offset = 3600) {
        sliderSq1.style.backgroundColor = "transparent";
        sliderSq2.style.backgroundColor = "transparent";
        sliderSq3.style.backgroundColor = "transparent";
        sliderSq4.style.backgroundColor = "white";
    }
});

document.querySelector('.slider-prev').addEventListener('click',function sliderSq(offset) {
    if (offset = 0) {
        sliderSq1.style.backgroundColor = "white";
        sliderSq2.style.backgroundColor = "transparent";
        sliderSq3.style.backgroundColor = "transparent";
        sliderSq4.style.backgroundColor = "transparent";
    }
    if (offset = 1200) {
        sliderSq1.style.backgroundColor = "transparent";
        sliderSq2.style.backgroundColor = "white";
    }
    if (offset = 2400) {
        sliderSq1.style.backgroundColor = "transparent";
        sliderSq2.style.backgroundColor = "transparent";
        sliderSq3.style.backgroundColor = "white";
    }
    if (offset = 3600) {
        sliderSq1.style.backgroundColor = "transparent";
        sliderSq2.style.backgroundColor = "transparent";
        sliderSq3.style.backgroundColor = "transparent";
        sliderSq4.style.backgroundColor = "white";
    }
});
