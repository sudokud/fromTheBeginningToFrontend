$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});
// Get the modal
// var modal = document.getElementById('signupForm');

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
// 	if (event.target == modal) {
// 		modal.style.display = 'none';
// 	}
// };


// var loginModal = document.getElementById('loginForm');

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
// 	if (event.target == loginModal) {
// 		loginModal.style.display = 'none';
// 	}
// };
