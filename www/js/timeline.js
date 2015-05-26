/* jshint
devel: true,
browser: true,
jquery: true
*/


/* --------------Naam-Event-------------------------- */


$(document).ready(function () {
    // var sendData = {url: 'http://api.adaytoshare.be/1/platform/check_code?code=' + inlogCode};
    var inlogCode = localStorage.getItem('loginCode');
        jQuery.ajax({
                //type: 'GET',
                
                url: 'http://api.adaytoshare.be/1/platform/check_code?code=' + inlogCode,
                //url: 'crosscall.php',
                //data: JSON.stringify({code:'951951'}),
                dataType: 'json',
            //data: sendData,
                success: function(responseData){
                    
                    $('.naam_event').text(responseData.album_name);

                },
                error: function(responseData){  
                  alert("server niet beschikbaar");
                },
   
            }); 
});


/* -------------Ophalen tekstberichten------------*/
$(document).ready(function () {

    
        var messages = [];
    
        jQuery.ajax({
                url: 'http://api.adaytoshare.be/1/guestbook/get_posts?code=951951',
                dataType: 'json',
                success: function(responseData){
                    
                    window.responseData = responseData;          
                    
                    
                for(var i =4; i > -1; i--){
                    var htmlString="";
                    htmlString += "<article>";
                    htmlString += "<p class='messagetime'>" + timeConverter(responseData.messages[i].timestamp) + "</p>";
                    htmlString += "<p class='ongepast_icon'>a</p>"
                    htmlString += "<p class='messagename'>" + responseData.messages[i].from + "</p>";
                    htmlString += "<p class='message'>" + responseData.messages[i].message + "</p>";
                    if(responseData.messages[i].photoURL !== "")
                        htmlString += "<img src='" + responseData.messages[i].photoURL +"' alt='afbeelding' style='float: left'>";
                    htmlString += "<img src='img/ADTSiconsheartnotliked.svg' alt='hartje voor likes' class='like-heart'>";
                    htmlString += "<p class='like-count'>" + responseData.messages[i].likes + "</p>";
                    htmlString += "</article>";
                    $('.welcome').after(htmlString);
                }

                    likes();
                },
                error: function(responseData){  
                  alert("server niet beschikbaar");

                },
   
            }); 
    
    
    
//http://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript
function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp*1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = hour + ':' + min;
  return time;
}


//}
    
        });


//------------------------- Likes (wordt opgeroepen in de ajax call van: Ophalen tekstberichten------------*/
var likes = function(){   
    
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
        }
        
        else {
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
};



