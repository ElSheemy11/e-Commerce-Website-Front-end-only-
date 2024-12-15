$(document).ready(function () {
    var silder = $(".owl-carousel");
    silder.owlCarousel({
        autoPlay: false,
        items: 1,
        center: false,
        nav: true,
        margin: 40,
        dots: false,
        loop: true,
        navText: ["<i class='fa fa-arrow-left' aria-hidden='true'></i>", "<i class='fa fa-arrow-right' aria-hidden='true'></i>"],
        responsive: {
            0: {
                items: 1,
            },
            575: { items: 1 },
            768: { items: 2 },
            991: { items: 3 },
        }
    });
});








// blue card animation scroll on
document.addEventListener('scroll', function () {
    const blueCard = document.querySelector('.blue-card');
    const cardPosition = blueCard.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (cardPosition < viewportHeight) {
        blueCard.classList.add('animate');
    } else {
        blueCard.classList.remove('animate');
    }
});






// card group animation scroll on
document.addEventListener('scroll', function() {
    const cardGroup = document.querySelector('.card-group');
    const groupPosition = cardGroup.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;
  
    // Adjust the threshold to trigger the animation earlier
    const triggerPoint = viewportHeight *1.8; // Adjust this value as needed
  
    if (groupPosition < triggerPoint) {
      cardGroup.classList.add('animate');
    } else {
      cardGroup.classList.remove('animate');
    }
  });
  
  // Trigger scroll event on page load to handle initial position
  document.addEventListener('DOMContentLoaded', function() {
    document.dispatchEvent(new Event('scroll'));
  });
  


