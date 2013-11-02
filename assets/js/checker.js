$(function() {  
    $(".button").click(function() {

  var num_rows=localStorage.length;
  var key="userdata."+(num_rows).toString();
  // My test with json
  var myinfo = JSON.parse(localStorage[key]);
  myinfo[5] = myinfo[5]+1;

    var answer = doDM();

    if(answer == "1"){  
  //correct  
	alert("you rock");
  e = document.getElementById('output');
	e.innerHTML= $("#praise").val();


  myinfo[6] = 1 ;


  // start of jquery button stuff for right answers
    $("#right").css("visibility","visible");

    $(function(){
       $("#harder").click(function(){
         window.location = "cipher2.htm";
      });
       $("#finished").click(function(){
         window.location = "index.htm";
      });
    });

  }
  else{
  //failed
  e = document.getElementById('output');
      e.innerHTML= $("#encourage").val();

  $("#wrong").css("visibility","visible");

  // start of jquery button stuff
    $(function() {
        $("#tryagain").click(function(){
           window.location = "cipher.htm";
        });
        $("#giveup").click(function(){
            window.location = "index.htm";
        });           
       $("#hint").click(function(){
            $("#hintbox").css("display","block");
       });
    });


  }
  textToAdd=JSON.stringify(myinfo);
  localStorage[key]=textToAdd;
    });
});


