/**
 * Created by Alex on 08.10.2014.
 */
(function(){
	var classNames = {
		toysiActionCarousel: 'toysi-action-carousel',
		toysiCarouselControlPrev: 'toysi-carousel-control__prev',
		toysiCarouselControlNext: 'toysi-carousel-control__next',
		toysiCarouselControlPager: 'toysi-carousel-control__pager'
	};

	var ids = {
	};

	var selectors = ts.buildSelectors(classNames, ids);

	$(function(){
		$.getScript('js/jquery.carouFredSel-6.2.1-packed.js').done(function(){
			$(selectors.toysiActionCarousel).carouFredSel({
				auto: false,
				scroll: 4,
				prev: selectors.toysiCarouselControlPrev,
				next: selectors.toysiCarouselControlNext,
				pagination: selectors.toysiCarouselControlPager
			});
		}).fail(function(){
			console.log('Fail load file jquery.carouFredSel-6.2.1-packed.js');
		});
	});

})();