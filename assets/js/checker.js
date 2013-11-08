$(function() { 
  // parse the userdata for the current user from localStorage
  var num_rows=localStorage.length;
  var key="userdata."+(num_rows).toString();
  var myinfo = JSON.parse(localStorage[key]);
  
  // If an agentname has been given, use it
   var agentnym;
    if(myinfo.agent){
	agentnym = myinfo.agent;
    } else {
	agentnym = "Agent";
    }  


    $("#attnAgent").html("Attention "+agentnym+": "+$("#attnAgent").html());

   // Place the correct links/buttons in based on our current page
    thisPage = pages[myinfo.page];    
    nextPage = pages[parseInt(myinfo.page) + 1]; 

    $(".subbtn").click(function() {
	if(myinfo.tries){
	    myinfo.tries = myinfo.tries + 1;
	} else {
	    myinfo.tries = 1;
	}

    answer = doDM();
	$("#checker").css("visibility","visible");

    if(answer == "1"){  
  //correct  
	$("#checker").addClass("alert-success");
 	$("#output").html($("#praise").val());
     
        // Handles the page where the agentnym is set
        if($("#agentnym")){
	    myinfo.agent = $("#agentnym").val();
        }

  myinfo.success = 1 ;


  // start of jquery button stuff for right answers
    $("#right").css("visibility","visible");

    $(function(){
       $("#harder").click(function(){
	  // increment the page number
	  myinfo.page = parseInt(myinfo.page) + 1;
          textToAdd=JSON.stringify(myinfo);
          localStorage[key]=textToAdd;
  
         window.location = nextPage;
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
           window.location = thisPage;
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


