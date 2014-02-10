$(document).ready(function(){

var addEvent = (function(){
		if (window.addEventListener) {
			return function(el, sType, fn, capture) {
				el.addEventListener(sType, fn, (capture));
			};
		} else if (window.attachEvent) {
			return function(el, sType, fn, capture) {
				el.attachEvent("on" + sType, fn);
			};
		} else {
			return function(){};
		}
	})(),
	mousewheel = "mousewheel";

$(window).resize(function() {

ifvar = 1;
width = document.body.clientWidth;

$("#article")
	.mouseenter( function() { ifvar = 0 } )
	.mouseleave( function() { ifvar = 1 } );

addEvent(document.body, mousewheel, function(event){
	event = window.event || event;
	if ( ifvar != 0 && width > 1020 ) {
		$(document).scrollLeft( $(document).scrollLeft() - event.wheelDelta );
	};
}, false);

});

});