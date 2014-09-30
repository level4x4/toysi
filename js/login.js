/**
 * Created by Alex on 30.09.2014.
 */
(function(){
	var classNames = {
		toysiPasswordResetContainer: 'toysi-password-reset-container',
		toysiPasswordReset: 'toysi-password-reset',
		toysiClose: 'toysi-close',

		hide: 'hide'
	};

	var ids = {
	};

	var selectors = ts.buildSelectors(classNames, ids);

	var $toysiPasswordReset = $(selectors.toysiPasswordReset),
		$toysiClose = $(selectors.toysiClose),
		$toysiPasswordResetContainer = $(selectors.toysiPasswordResetContainer);

	var showHidePasswordResetContainer = function(){
		$toysiPasswordResetContainer.toggleClass(classNames.hide);
		return false;
	};

	$toysiPasswordReset.on('click', showHidePasswordResetContainer);
	$toysiClose.on('click', showHidePasswordResetContainer);

})();
