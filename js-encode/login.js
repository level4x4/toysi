/**
 * Created by Alex on 30.09.2014.
 */
(function(){
	var classNames = {
		toysiPasswordResetContainer: 'toysi-password-reset-container',
		toysiPasswordReset: 'toysi-password-reset',
		toysiClose: 'toysi-close',
		toysiLoginBtn: 'toysi-login-btn',
		toysiFormVerify: 'toysi-form-verify',
		toysiTextDanger: 'toysi-text-danger',
		toysiFormGroup: 'toysi-form-group',

		hasError: 'has-error',
		hide: 'hide'
	};

	var ids = {
	};

	var selectors = ts.buildSelectors(classNames, ids);

	var $toysiPasswordReset = $(selectors.toysiPasswordReset),
		$toysiClose = $(selectors.toysiClose),
		$toysiPasswordResetContainer = $(selectors.toysiPasswordResetContainer),
		$toysiLoginBtn = $(selectors.toysiLoginBtn);

	var showHidePasswordResetContainer = function(){
		$toysiPasswordResetContainer.toggleClass(classNames.hide);
		return false;
	};

	$toysiPasswordReset.on('click', showHidePasswordResetContainer);
	$toysiClose.on('click', showHidePasswordResetContainer);

	$toysiLoginBtn.on('click', function(){
		var errorText = '';
		$(selectors.toysiFormGroup).removeClass(classNames.hasError);
		$(selectors.toysiTextDanger).addClass(classNames.hide);
		$(selectors.toysiFormVerify).each(function(){
			if (!$(this).val()) {
				$(this).closest(selectors.toysiFormGroup).addClass(classNames.hasError);
				if (errorText) {
					errorText = errorText + ', ' + $(this).attr('placeholder').toLowerCase();
				} else {
					errorText = $(this).attr('placeholder').toLowerCase();
				}
			}
			if (errorText) {
				$(selectors.toysiTextDanger).text('Введите ' + errorText).removeClass(classNames.hide);
			}
		});
		if (errorText) {
			return false;
		}
	});

	$(selectors.toysiFormVerify).on('input propertychange', function(){
		if ($(this).val()){
			$(this).closest(selectors.toysiFormGroup).removeClass(classNames.hasError);
		}
	});

})();
