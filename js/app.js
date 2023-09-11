jQuery( document ).ready( function(){
	jQuery('.menu-toggle').on('click',function(){
		jQuery(this).toggleClass('active')
		jQuery('.main-menu').toggle();
	});
});