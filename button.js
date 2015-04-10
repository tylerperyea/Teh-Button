colorTimer = window.setInterval(function(){ 
var s = parseInt($("#thebutton-s-10s").html()+$("#thebutton-s-1s").html());

var ring = $('.thebutton-pie-container')
ring.css('-webkit-transition', 'background-color 0.4s')
    .css('-moz-transition', 'background-color 0.4s')
    .css('-ms-transition', 'background-color 0.4s')
    .css('-o-transition', 'background-color 0.4s')
    .css('transition', 'background-color 0.4s');
if (s < 12) { ring.css('background-color', '#e50000') } else
if (s < 22) { ring.css('background-color', '#e59500') } else
if (s < 32) { ring.css('background-color', '#e5d900') } else
if (s < 42) { ring.css('background-color', '#02be01') } else
if (s < 52) { ring.css('background-color', '#0083c7') } else
{ ring.css('background-color', '#820080') }
}, 10);


