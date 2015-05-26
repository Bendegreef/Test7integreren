/* jshint
devel: true,
browser: true,
jquery: true
*/
$(document).ready(function () {
    $('.ongepast_icon').click(function () {
        
        $('.gekleurdebalk').animate({
            height: '65px'
        }, 500, 'easeInOutCubic', function () {
            $('.gekleurdebalk ul').show("slide", {direction: 'down'}, 300, function() {$('.darken').animate({opacity: '1'})});
        });
    });
    
    $('.gekleurdebalk ul').click(function () {
        $('.gekleurdebalk').animate({
            height: '0.45em'
        }, 500, 'easeInOutCubic', function () {
            $('.gekleurdebalk ul').hide("slide", {direction: 'down'}, 300);
        });
        
        $('.darken').animate({opacity: '0'}, 1000)
    });
});