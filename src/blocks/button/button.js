if ( $('.card-selection').length &&  $('.banking-services').length) {
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
}