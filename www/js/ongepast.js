/* jshint
devel: true,
browser: true,
jquery: true
*/

$(document).ready(function () {
    $('.ongepast_icon').click(function () {
        $('.gekleurdebalk').animate({ height: '65px'
        }, function() {
            $('.gekleurdebalk ul').show('slide', {
                direction: 'down'
            }, function() {
                $('.darken').animate({opacity: '1'})
            });
        });
    });
    
    $('.gekleurdebalk ul').click(function () {
        $('.gekleurdebalk').animate({ height: '0.45em'}, function () {
            $('.gekleurdebalk ul').hide('slide', {
                direction: 'down'
            });
        });
        
        $('.darken').animate({opacity: '0'});
    });
});