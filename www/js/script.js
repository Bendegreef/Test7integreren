/* jshint
devel: true,
browser: true,
jquery: true
*/

/* ---- Animatie van de tabs (bericht & tijdlijn) ---- */

$(document).ready(function () {
    
    $('.berichttab').click(function () {
        $('.berichtactive').show("slide", {
            direction: 'right'
        }, 500);
        $('.berichttab').animate({
            backgroundColor: '#2C3E50'
        });
        $('.tijdlijntab').animate({
            backgroundColor: '#34495E'
        });
        $('.tijdlijnactive').hide("slide", {
            direction: 'left'
        }, 500);
        $('.berichticon').animate({
            fontSize: '33px',
            color: '#50AFC4'
        });
        $('.tijdlijnicon').animate({
            fontSize: '30px',
            color: '#fff'
        });

    });

    $('.tijdlijntab').click(function () {
        $('.tijdlijnactive').show("slide", {
            direction: 'left'
        }, 500);
        $('.tijdlijntab').animate({
            backgroundColor: '#2C3E50'
        });
        $('.berichttab').animate({
            backgroundColor: '#34495E'
        });
        $('.berichtactive').hide("slide", {
            direction: 'right'
        }, 500);
        $('.tijdlijnicon').animate({
            fontSize: '33px',
            color: '#50AFC4'
        });
        $('.berichticon').animate({
            fontSize: '30px',
            color: '#fff'
        });
    });

});
/* ---------------------------------------- */





/* ---- Like iconen van de tijdlijn ---- */
/*
$(document).ready(function () {

    var counter = 0;

    $('.like-heart').click(function () {
        counter += 1;
        if (counter % 2 === 0) {
            $(this).animate({
                width: '0'
            }, 400, 'easeInOutCubic', function () {
                $(this).attr('src', 'img/ADTSiconsheartnotliked.svg');
            });
            $(this).animate({
                width: '18px'
            }, 500, 'easeOutBack');
        } else {
            $(this).animate({
                width: '0'
            }, 400, 'easeInOutCubic', function () {
                $(this).attr('src', 'img/ADTSiconsheartliked.svg');
            });
            $(this).animate({
                width: '18px'
            }, 500, 'easeOutBack');
        }

    });
});*/
/* ---------------------------------------- */


/* ---- Popup 'help' bij login ---- */
$(document).ready(function () {
    $('.more_info').click(function () {
        $('.wrapperhelp').show(0, function () {
            $('.help').fadeIn(500, function () {
                $('.helptekst').slideDown(500);
            });
        });
    });

    $('.closehelp').click(function () {
        $('.helptekst').slideUp(500, function () {
            $('.help').fadeOut(500, function () {
                $('.wrapperhelp').hide();
            });
        });
    });
});
/* ---------------------------------------- */


/*----- Pop up tekstinvoer - Publiek/private --------*/

$(document).ready(function () {

	$(".public_private").click(function () {
		$(".publiek-prive").fadeIn(300);
	});
	
	$(".li-popupprive, .li-popuppubliek, .publiek-prive, .wrapper ").click(function(){
		$(".publiek-prive").fadeOut(300);
	
	});
	
	$(".li-popupprive").click(function() {
		$(".public_private").text("privé");
	
	});
	
	$(".li-popuppubliek").click(function() {
		$(".public_private").text("publiek");
	
	});
 

});
  
/* ---------------------------------------- */


/* ---- Hamburger-menu animatie & Logout slide animatie  ---- */
$(document).ready(function () {
    var menuIcon = $('.menu_icon');

    $('.menu_icon').click(function () {
        if (menuIcon.hasClass('open')) {
            $('.slidemenu').hide('slide', {
                direction: 'left'
            });
            $('.menu_icon').removeClass('open');
        } else {
            $('.slidemenu').show('slide', {
                direction: 'left'
            });
            $('.menu_icon').addClass('open');
        }
    });
});

/* ---------------------------------------- */


