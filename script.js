function myFunction(){
  var element = document.getElementById("video");
  var komunikatwait = document.getElementById("wait");
  var desiredPosition = 1950;
  var wh = $(window).height();

  if(window.pageYOffset >= desiredPosition){
     element.style.position = "absolute";
     element.style.top = desiredPosition+"px"; //1690px
     komunikatwait.style.display = "none";
    }
  else {
	  element.style.top = "0px";
     element.style.position = "fixed"; 
     komunikatwait.style.display = "inline"; 
   } 
 }