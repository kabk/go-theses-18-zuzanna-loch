function myFunction(){
  var element = document.getElementById("video");
  var desiredPosition = 1800;
  if(window.pageYOffset >= desiredPosition){
     element.style.position = "absolute";
     element.style.top = "1500px";
    }
  else {
	  element.style.top = "-200px";
     element.style.position = "fixed";  
   } 
 }