document.addEventListener("DOMContentLoaded", function () {
    const closePopup = document.querySelector('.popup__close');
    const backdropClose = document.querySelector('.backdrop');
    const buttonOpenPopup = document.querySelector('.open-popup');
    //mobile menu
    const openButton = document.querySelector('.mobile-menu--toggle');
    const mobileMenu = document.querySelector('.main-header__menu');
    if(buttonOpenPopup) {
        buttonOpenPopup.addEventListener("click", function () {
            backdropClose.classList.remove("is-hidden");
            document.querySelector(".popup").classList.remove("is-hidden");
            document.body.classList.add("body__hidden");
        });
    }
    if(closePopup) {
        closePopup.addEventListener("click", function () {
            backdropClose.classList.add("is-hidden");
            document.querySelector(".popup").classList.add("is-hidden");
            document.body.classList.remove("body__hidden");

        });
    }
    if(backdropClose){
        backdropClose.addEventListener("click", function () {
            backdropClose.classList.add("is-hidden");
            document.querySelector(".popup").classList.add("is-hidden");
            document.body.classList.remove("body__hidden");
        })
    }
    openButton.addEventListener("click", function (){
        openButton.classList.toggle("mobile-menu__is-open");
        mobileMenu.classList.toggle("main-header--is-hidden");

    })

})