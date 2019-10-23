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
});