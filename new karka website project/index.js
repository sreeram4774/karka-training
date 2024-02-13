function initializeSwiper(){
    var swiper = new Swiper(".mySwiper1",{
    slidesPerView:4,
    spaceBetween: 10,
    slidesPerGroup:4,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000, 
        disableOnInteraction: false,
      },
      effect: 'slide', // Choose the slide effect for smooth transitions
      speed: 3000, // Set the speed of the transition (in ms)
  });
  }

 
  window.onload=function(){
    initializeSwiper();
  }