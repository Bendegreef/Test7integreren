/* jshint
devel: true,
browser: true,
jquery: true
*/

/* --------------Naam-Event + naam persoon-------------------------- */


$(document).ready(function () {
    // var sendData = {url: 'http://api.adaytoshare.be/1/platform/check_code?code=' + inlogCode};
    var inlogCode = localStorage.getItem('loginCode');
    var naam = localStorage.getItem('naam');
        jQuery.ajax({
                //type: 'GET',
                
                url: 'http://api.adaytoshare.be/1/platform/check_code?code=' + inlogCode,
                //url: 'crosscall.php',
                //data: JSON.stringify({code:'951951'}),
                dataType: 'json',
            //data: sendData,
                success: function(responseData){
                    
                    $('.naam_event').text(responseData.album_name);
                    $('.naam').text(naam);

                },
                error: function(responseData){  
                  alert("server niet beschikbaar");
                },
   
            }); 
});

/* --------------verzenden-------------------------- */

var eventposted=0;

$(document).ready(function () {
      document.getElementById("send_message").addEventListener("click", verzenden, false);

    function verzenden(){
      
        var bericht = $('.bericht').val();  
        var loginCode = localStorage.getItem('loginCode');
        var naam = $('.naam').text(); 
        $('#code').text(loginCode);
        $('#message').val(bericht);
        $('#name').val(naam);

         $('#verzend_knop').trigger('click');
          window.setInterval(veranderURL, 200); //http://answers.squarespace.com/questions/51868/after-a-successful-form-submission-how-do-i-redirect-to-another-page

        
 /*      var data = {'code':loginCode,'name':naam, 'message': bericht};
 $.ajax({
   url: "http://ehb.adaytoshare.be/adts/guestbook/add_post" ,
   type: 'POST',
   //contentType:'application/json',
   data: JSON.stringify(data),
   dataType:'json',
   success: function(data){
     //On ajax success do this
     alert("ok");
      },
   error: function(xhr, ajaxOptions, thrownError) {
      alert("fout");
        $.mobile.loading('hide')
    }
 });*/
    }
});


function veranderURL(){
  if(eventposted==0){
    window.location = "timeline.html";
    eventposted=1;
  }
}
/*
        
        <form action="http://ehb.adaytoshare.be/adts/guestbook/add_post" method="post" class="guestbook_form">
            <h2>Zonder foto</h2>
            <label>Code:</label> <input type="text" name="code" /><br />
            <textarea name="message" placeholder="Uw bericht"></textarea><br />
            <input type="text" name="name" id="name" placeholder="Wie ben je of wie zijn jullie?" value="" />
            <div id="button">
                <input type="submit" name="btnSubmit" value="Plaats bericht" />
            </div>
        </form>
        */