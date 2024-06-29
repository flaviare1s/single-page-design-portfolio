let slideIndex = 2;

function changeSlide(n) {
  slideIndex += n
  showSlide(slideIndex)
}

function showSlide(n) {
  const slides = document.getElementsByClassName("slide")
  const totalSlides = slides.length;

  if (n >= totalSlides) {
    slideIndex = 0
  }
  if (n < 0) {
    slideIndex = totalSlides - 1
  }

  const offset = -slideIndex * (slides[0].offsetWidth + 20) + (document.querySelector('.slide-show-container').offsetWidth / 2 - slides[0].offsetWidth / 2)

  document.querySelector('.slide-show-container').style.transform = `translateX(${offset}px)`

  for (let i = 0; i < totalSlides; i++) {
    slides[i].style.display = "block"
  }
}

document.querySelector('.prev').addEventListener('click', () => changeSlide(-1))
document.querySelector('.next').addEventListener('click', () => changeSlide(1))

window.addEventListener('load', () => showSlide(slideIndex))
window.addEventListener('resize', () => showSlide(slideIndex))
