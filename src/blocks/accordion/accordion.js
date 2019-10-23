$(function(){
   $('.faq__list .faq__question').click(function(j) {
      var dropDown = $(this).closest('.faq__item').find('.faq__answer');

      $(this).closest('.faq__list').find('.faq__answer').not(dropDown).slideUp();

      if ($(this).hasClass('faq__question--active')) {
         $(this).removeClass('faq__question--active');
      } else {
         $(this).closest('.faq__list').find('.faq__question--active').removeClass('faq__question--active');
         $(this).addClass('faq__question--active');
      }

      dropDown.stop(false, true).slideToggle();
   });

});