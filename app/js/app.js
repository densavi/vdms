// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

import $ from 'jquery';

document.addEventListener('DOMContentLoaded', () => {

	$('.has-submenu').each(function() {
		$(this).find('> a').on('click', function(e) {
			e.preventDefault();
			$(this).parent().toggleClass('active');
			$(this).parent().find('.submenu').slideToggle(500);
		})
	})

})
