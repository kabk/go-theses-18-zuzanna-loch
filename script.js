function myFunction(){
  var element = document.getElementById("video");
  var komunikatwait = document.getElementById("wait");
  var desiredPosition = 1900;
  if(window.pageYOffset >= desiredPosition){
     element.style.position = "absolute";
     element.style.top = "1690px";
     komunikatwait.style.display = "none";
    }
  else {
	  element.style.top = "-200px";
     element.style.position = "fixed"; 
     komunikatwait.style.display = "inline"; 
   } 
 }