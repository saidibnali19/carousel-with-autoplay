const myslide = document.querySelectorAll("[data-slide]"),
      dots = document.querySelectorAll("[data-dot-indicator]"),
      prev = document.querySelector("[data-prev-button]"),
      next = document.querySelector("[data-next-button]");

let counter = 1;
slidefun(counter);
      
let timer = setInterval(autoslide, 8000);

prev.addEventListener("click", () => plusSlides(-1))
next.addEventListener("click", () => plusSlides(+1))

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", () => currentSlide(i + 1))
}

function autoslide(){
  counter += 1;
  slidefun(counter);
}

function plusSlides(n){
  counter += n;
  slidefun(counter);
  resetTimer();
}

function currentSlide(n){
  counter = n;
  slidefun(counter);
  resetTimer();
}

function resetTimer(){
  clearInterval(timer);
  timer = setInterval(autoslide, 8000);
}

function slidefun(n){
  let i;

  for(i = 0; i < myslide.length; i++){
    myslide[i].style.display = "none";
  }

  for(i = 0; i < dots.length; i++){
    dots[i].classList.remove("active");
  }

  if(n > myslide.length){
    counter = 1;
  }

  if(n < 1){
    counter = myslide.length;
  }
  
  myslide[counter - 1].style.display = "block";
  dots[counter - 1].classList.add("active");
}