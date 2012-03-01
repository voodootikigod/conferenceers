

/* Author:

*/


!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");


(function() {
  var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
  po.src = 'https://apis.google.com/js/plusone.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();


$(function () {
  var pn = window.location.pathname;
  if (pn == "/about.html") {
    $("#nav-about").addClass("active");
  } else if (pn == "/speakers.html") {
    $("#nav-speakers").addClass("active");
  } else if (pn == "/schedule.html") {
    $("#nav-schedule").addClass("active");
  } else if (pn == "/venue.html") {
    $("#nav-venue").addClass("active");
  } else if (pn == "/sponsors.html") {
    $("#nav-sponsors").addClass("active");
  } else {
    $("#nav-home").addClass("active");
  }
})