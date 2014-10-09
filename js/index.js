/**
 * Created by Alex on 08.10.2014.
 */
(function(){
	var classNames = {
		toysiSliderContainer: 'toysi-slider-container',
	};

	var ids = {
	};

	var selectors = ts.buildSelectors(classNames, ids);

	$(function(){
		$.getScript('js/slider.js').done(function(){
			$(selectors.toysiSliderContainer).slider();
		}).fail(function(){
			console.log('Fail load file slider.js');
		});
	});

})();
