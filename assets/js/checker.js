$(function() {  
    $(".subbtn").click(function() {

  var num_rows=localStorage.length;
  var key="userdata."+(num_rows).toString();
  // My test with json
  var myinfo = JSON.parse(localStorage[key]);
  myinfo[5] = myinfo[5]+1;

    answer = doDM();
	$("#checker").css("visibility","visible");

    if(answer == "1"){  
  //correct  
	$("#checker").addClass("alert-success");
 	$("#output").html($("#praise").val());


  myinfo[6] = 1 ;


  // start of jquery button stuff for right answers
    $("#right").css("visibility","visible");

    $(function(){
       $("#harder").click(function(){
         window.location = "cipher2.html";
      });
       $("#finished").click(function(){
         window.location = "index.html";
      });
    });

  }
  else{
  //failed
	$("#checker").addClass("alert-info");
      $("#output").html($("#encourage").val());

  $("#wrong").css("visibility","visible");

  // start of jquery button stuff
    $(function() {
        $("#tryagain").click(function(){
           window.location = "cipher.html";
        });
        $("#giveup").click(function(){
            window.location = "index.html";
        });           
       $("#hint").click(function(){
            $("#hintbox").css("display","block");
       });
    });


  }
  textToAdd=JSON.stringify(myinfo);
  localStorage[key]=textToAdd;
  return false; 
   });
    
});


