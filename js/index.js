/**
 * Created by Alex on 08.10.2014.
 */
(function(){
	var classNames = {
		toysiSliderContent: 'toysi-slider-content',
		toysiSliderPages: 'toysi-slider-pages',

		active: 'active'
	};

	var ids = {
	};

	var selectors = ts.buildSelectors(classNames, ids);

	var timerListSlide,
		intervalSlider = 10000; // ms

	var initializationSlider = function(){
		var countSlides = $(selectors.toysiSliderContent).children().length;
		$(selectors.toysiSliderPages).html('');
		for (var i=0; i < countSlides; i++) {
			$(selectors.toysiSliderPages).append($('<li/>'));
		}
		$(selectors.toysiSliderPages).find('li:first').addClass(classNames.active);

		timerListSlide = setInterval(function(){
			moveSlide();
		}, intervalSlider);

	};

	var moveSlide = function() {
		var $slider = $(selectors.toysiSliderContent),
			$pages = $(selectors.toysiSliderPages),
			sliderSpeed = 1000,
			itemsTotal = $(selectors.toysiSliderPages).children().length;
		$slider.children(':last').after($slider.children().slice(0, 1).clone(true));
		$pages.children(':first').before($pages.children().slice(itemsTotal - 1, itemsTotal).clone(true));
		$slider.children().slice(1, 2).animate({left: -735}, {queue: false, duration: sliderSpeed, complete: function() {
			$slider.children().slice(1, 2).css({left: 0});
		}});
		$slider.children().slice(0, 1).animate({left: -735}, {queue: false, duration: sliderSpeed, complete: function() {
			$slider.children().slice(0, 1).remove();
		}});
		$pages.children().slice(itemsTotal, itemsTotal + 1).remove();
	};

	$(function(){
		initializationSlider();
	});

})();
