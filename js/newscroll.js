// init controller
var controller = new ScrollMagic.Controller();

// loop through all elements with a class fade-in
$('.animated').each(function(){
	
	//build a tween
	var tween = TweenMax.from($(this), 0.3, {autoAlpha: 0, scale: 0.5, y: '+=30', ease:Linear.easeNone});
	
	// build a scene
	var scene = new ScrollMagic.Scene({
		triggerElement: this
	})
	.setTween(tween)
	.addTo(controller);

});