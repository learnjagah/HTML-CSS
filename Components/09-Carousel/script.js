const slides = document.getElementsByClassName('slide');
console.log(slides);
let currentSlide = 1;

function moveSlides(){
    currentSlide = 1;
    Array.from(slides).forEach((el, i) => {
        el.style.transform  = `transalateX(${i*100}%)`;
    });
}

function nextSlide(){
    if(currentSlide >= slides.length){
        return;
    }

    Array.from(slides).forEach((el, i) =>{
        if(currentSlide == i){
            el.style.transform = `translateX(${(i-currentSlide) * 100}%)`;
        }
    });
    currentSlide++;
}

function prevSlide(){

    if(currentSlide <= 1){
        return;
    }
    Array.from(slides).forEach((el, i) =>{
        if(currentSlide-1 == i){
            el.style.transform = `translateX(${(i-currentSlide) * 100}%)`;
        }
    });
    currentSlide--;
}

document.onload = moveSlides();