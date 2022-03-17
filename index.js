function showMenu(){
    let nav = document.getElementById('nav');
    let showMenuImg = document.getElementById('showMenuImg')
    let logo = document.getElementById('logo')
    let logoMenuBtn = document.getElementById('logoMenuBtn')

    if(nav.style.display === 'none'){
        nav.style.display = 'flex'
        showMenuImg.classList.remove('showMenuImg')
        showMenuImg.classList.add('closeMenuImg')
        logo.style.display = 'none'
        logoMenuBtn.style.flexDirection = 'row-reverse'

    } else{
        nav.style.display = 'none'
        showMenuImg.classList.remove('closeMenuImg')
        showMenuImg.classList.add('showMenuImg')
        logo.style.display = 'flex'
        logoMenuBtn.style.flexDirection = 'row'
    }
}

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });