$(function(){

   var openModal = document.querySelector('.modal-openstatus__button a');
   var openModalEmail = document.querySelector('#email-modal');
   var openModalCallback = document.querySelector('.modal-callback__button a');
   var openModalAccepted = document.querySelector('.modal-callback__button-send');
   var modal = document.querySelector('.modal');
   var modalEmail = document.querySelector('.modal-email');
   var modalOpenstatus = document.querySelector('.modal-openstatus');
   var modalСallback = document.querySelector('.modal-callback');
   var modalAccepted = document.querySelector('.modal-accepted');
   var popur = document.querySelector('.popup');
   var closeModalOpenstatus = document.querySelector('.modal-openstatus__close');
   var closeModalEmail = document.querySelector('.modal-email__close');
   var closeModalСallback = document.querySelector('.modal-callback__close');
   var closeModalAccepted = document.querySelector('.modal-accepted__close');
   var btnStatusPage = document.querySelector('.modal-openstatus__form .form-email__button');
   // var pageHtml = document.querySelector('.page');


   // модалка по кнопке с callback
   openModalAccepted.addEventListener('click', function () {
      modalAccepted.classList.add('modal-accepted--opened');
      modalСallback.classList.remove('modal-callback--opened');
   });

   closeModalAccepted.addEventListener('click', function () {
      modal.classList.remove('modal--opened');
      modalAccepted.classList.remove('modal-accepted--opened');
      document.body.classList.remove('hidden');
   });


   // модалка в кнопке фиксед
   openModalEmail.addEventListener('click', function () {
      modal.classList.add('modal--opened');
      modalEmail.classList.add('modal-email--opened');
      document.body.classList.add('hidden');
      // pageHtml.classList.add('hidden');
   });

   closeModalEmail.addEventListener('click', function () {
      modal.classList.remove('modal--opened');
      modalEmail.classList.remove('modal-email--opened');
      document.body.classList.remove('hidden');
      // pageHtml.classList.remove('hidden');
   });

   // модалка в кнопке в футуре Durumum
   openModal.addEventListener('click', function (e) {
      e.preventDefault();
      modal.classList.add('modal--opened');
      modalOpenstatus.classList.add('modal-openstatus--opened');
      document.body.classList.add('hidden');
      // pageHtml.classList.add('hidden');
   });

   closeModalOpenstatus.addEventListener('click', function () {
      modal.classList.remove('modal--opened');
      modalOpenstatus.classList.remove('modal-openstatus--opened');
      document.body.classList.remove('hidden');
      pageHtml.classList.remove('hidden');
   });

   // модалка в кнопке в футуре callback
   openModalCallback.addEventListener('click', function (e) {
      e.preventDefault();
      modal.classList.add('modal--opened');
      modalСallback.classList.add('modal-callback--opened');
      document.body.classList.add('hidden');
      // pageHtml.classList.add('hidden');
   });

   closeModalСallback.addEventListener('click', function () {
      modal.classList.remove('modal--opened');
      modalСallback.classList.remove('modal-callback--opened');
      document.body.classList.remove('hidden');
      // pageHtml.classList.remove('hidden');
   });

   btnStatusPage.addEventListener('click', function () {
      window.location.href='status-page.html';
   });


   var registLink = document.querySelector('.modal-openstatus__registration-link');

   registLink.onclick = function () {
      modal.classList.remove('modal--opened');
      popur.classList.remove('popup--opened');
      document.body.classList.remove('hidden');
   };

   // $(modal).on('touchmove', function(event) {
   //    event.preventDefault();
   // });

});