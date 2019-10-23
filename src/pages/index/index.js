$(function(){

   var openModal = document.querySelector('#openstatus a');
   var modal = document.querySelector('.modal');
   var popur = document.querySelector('.popup');
   var closeModal = document.querySelector('.close');

   openModal.addEventListener('click', function (e) {
      e.preventDefault();
      modal.classList.add('modal--opened');
      popur.classList.add('popup--opened');
      document.body.classList.add('hidden');
   });


   closeModal.addEventListener('click', function () {
      modal.classList.remove('modal--opened');
      popur.classList.remove('popup--opened');
      document.body.classList.remove('hidden');
   });


   var registLink = document.querySelector('.modal-openstatus__registration-link');

   registLink.onclick = function () {
      modal.classList.remove('modal--opened');
      popur.classList.remove('popup--opened');
      document.body.classList.remove('hidden');
   };

   var $page = $('html, body');
   $('a[href*="#"]').click(function() {
      $page.animate({
         scrollTop: $($.attr(this, 'href')).offset().top
      }, 400);
      return false;
   });

   var cardsSectionOffset = $('.card-selection').offset().top;
   var firstScreenHeight = $('.banking-services').outerHeight();

   $(window).scroll(function () {
      var scroll = $(this).scrollTop();
      if (scroll >= firstScreenHeight && scroll < cardsSectionOffset) {
         $('.button--fixet').addClass('button--fixet-active')
      }
      else {
         $('.button--fixet').removeClass('button--fixet-active')
      }
   });

   $('.slider-card__list').slick({
      arrows: false,
      dots: true,
      fade: true
   });
});