var firstScreenHeight = $('.banking-services').outerHeight();

$(window).scroll(function () {
   var scroll = $(this).scrollTop();
   if (scroll >= firstScreenHeight) {
      $('.button--fixet').addClass('button--fixet-active')
   }
   else {
      $('.button--fixet').removeClass('button--fixet-active')
   }
});