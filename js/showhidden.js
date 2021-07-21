jQuery('.hamburger_menu').on('click', function() {
    jQuery(this).toggleClass('active');
    jQuery('.header > ul').slideToggle();
});