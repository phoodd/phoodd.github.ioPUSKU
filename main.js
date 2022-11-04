const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

const images =["pic/pic1.jpg","pic/pic2.jpg","pic/pic3.jpg"];
const carousel = document.querySelector(".carousel");
const interval = setInterval(function() {
    startCarousel();
}, 15000);
var index = 1;

startCarousel = () => {
    carousel.style.backgroundImage = `url(${images[index++]})`;
    carousel.classList.remove("zoom");
    void carousel.offsetWidth;
    carousel.classList.add("zoom");
    if(index > images.length - 1) index = 0;
  }