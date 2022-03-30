function showMenu(){
    let nav = document.getElementById('nav');
    let showMenuImg = document.getElementById('showMenuImg')
    let logo = document.getElementById('logo')
    let logoMenuBtn = document.getElementById('logoMenuBtn')

    if(nav.classList.contains('nav-none')){
        nav.classList.remove('nav-none')
        nav.classList.add('nav-flex')
        showMenuImg.classList.remove('showMenuImg')
        showMenuImg.classList.add('closeMenuImg')
        logo.classList.remove('logo-flex')
        logo.classList.add('logo-none')
        logoMenuBtn.style.flexDirection = 'row-reverse'

    } else{
        nav.classList.remove('nav-flex')
        nav.classList.add('nav-none')
        showMenuImg.classList.remove('closeMenuImg')
        showMenuImg.classList.add('showMenuImg')
        logo.classList.remove('logo-none')
        logo.classList.add('logo-flex')
        logoMenuBtn.style.flexDirection = 'row'
    }
}

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 7000,
    },
    breakpoints: {
        // when window width is >= 320px
        1024: {
          slidesPerView: 2,
          setWrapperSize: true,
        },
    },
});