//Builds the JS countdown clock animation frame
function clockBuild(distance) {
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //var msec = Math.floor((distance % (1000)) / 10);
  // Display the result in the element with id="demo" microseconds version
  //document.getElementById("demo").innerHTML = "<p>" + leadZero(days) + ":" + leadZero(hours) + ":" + leadZero(minutes) + ":" + leadZero(seconds) + ":" + leadZero(msec) + "</p><span>Days:Hours:Min:Sec:MS</span>";
  // Display the result in the element with id="demo" no microseconds version
  document.getElementById("demo").innerHTML = "<p>" + leadZero(days) + ":" + leadZero(hours) + ":" + leadZero(minutes) + ":" + leadZero(seconds) + "</p><span>Days:Hours:Min:Sec</span>";
  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    //document.getElementById("demo").innerHTML = "<p>00:00:00:00:00</p><span>Days:Hours:Min:Sec:MS</span><br />EXPIRED";
	document.getElementById("demo").innerHTML = "<p>00:00:00:00</p><span>Days:Hours:Min:Sec</span><br />EXPIRED";
  }
};
//Add a leading 0 if the time is less than 10
function leadZero(time){
	if(time < 10){
	   time = "0" + time;
	  };
	  return time;
};