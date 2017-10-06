$( document ).ready(function() {
    // sidebar expand/collapsed
    $('.btn-expand-collapse').click(function() {
        $('.navbar-primary').toggleClass('collapsed');
        $(this).toggleClass('collapsedBtn');
        $(this).children('.fa').toggleClass('fa-angle-right');
    });



    // On hover check whether it is collapsed panel or expanded panel
    // in expanded panel, when submenu is visible change the footer style(only show icons)
    $('.menu-option').mouseover(function() {
        if($(this).children('ul').hasClass('sub-menu')) {
            if($(this).closest('.navbar-primary').hasClass('collapsed')) {
                $('.navbar-primary-menu-footer').show();
                $('.submenu-expand-footer').hide();
            } else {
                $('.navbar-primary-menu-footer').hide();
                $('.submenu-expand-footer').show();
            }
        }
        }).mouseout(function() {
        $('.navbar-primary-menu-footer').show();
        $('.submenu-expand-footer').hide();
    });
});