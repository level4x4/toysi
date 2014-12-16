/**
 * Created by Alex on 08.10.2014.
 */
(function(){
	var classNames = {
		toysiSliderContainer: 'toysi-slider-container',
		toysiActionCarousel: 'toysi-action-carousel',
		toysiCarouselControlPrev: 'toysi-carousel-control__prev',
		toysiCarouselControlNext: 'toysi-carousel-control__next',
		toysiCarouselControlPager: 'toysi-carousel-control__pager'
	};

	var ids = {
	};

	var selectors = ts.buildSelectors(classNames, ids);

	$(function(){
		$.getScript('http://web7.com.ua/js/slider.js').done(function(){
			$(selectors.toysiSliderContainer).slider({
				btnNext: '.slider-nav-next',
				btnPrev: '.slider-nav-prev'
			});
		}).fail(function(){
			console.log('Fail load file slider.js');
		});
		$.getScript('http://web7.com.ua/js/jquery.carousel-packed.js').done(function(){
			$(selectors.toysiActionCarousel).carouFredSel({
				auto: false,
				scroll: 4,
				prev: selectors.toysiCarouselControlPrev,
				next: selectors.toysiCarouselControlNext,
				pagination: selectors.toysiCarouselControlPager
			});
		}).fail(function(){
			console.log('Fail load file jquery.carousel-packed.js');
		});
	});

})();
