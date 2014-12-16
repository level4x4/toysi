/**
 * Created by Alex on 30.09.2014.
 */
(function(){
	var classNames = {
		toysiCountProduct: 'toysi-count-product',
		toysiCountControl: 'toysi-count-control',
		toysiCountLeft: 'toysi-count-left',
		toysiCountRight: 'toysi-count-right',
		toysiCountInput: 'toysi-count-input',
		toysiPrice: 'toysi-price',
		toysiSum: 'toysi-sum',
		toysiOutcomeSum: 'toysi-outcome-sum'
	};

	var ids = {
	};

	var selectors = ts.buildSelectors(classNames, ids);

	var $toysiCountControl = $(selectors.toysiCountControl),
		$toysiOutcomeSum = $(selectors.toysiOutcomeSum);

	$toysiCountControl.on('click', function(){
		var $countInput = $(this).closest(selectors.toysiCountProduct).find(selectors.toysiCountInput),
			$toysiPrice = $(this).closest('tr').find(selectors.toysiPrice),
			$toysiSum = $(this).closest('tr').find(selectors.toysiSum),
			countProduct, price, sum;
		countProduct = $countInput.val().replace(/\D/g, '');
		price = $toysiPrice.text().replace(' грн.', '');
		if ($(this).hasClass(classNames.toysiCountLeft)) {
			if (countProduct > 1) {
				countProduct--;
				$countInput.val(countProduct + ' шт.');
			}
		}
		if ($(this).hasClass(classNames.toysiCountRight)) {
			countProduct++;
			$countInput.val(countProduct + ' шт.');
		}
		sum = price * countProduct;
		$toysiSum.text(sum.toFixed(2));

		outcomeSum();
	});

	var outcomeSum = function(){
		var sum = 0;
		$(selectors.toysiSum).each(function(){
			sum = sum + parseInt($(this).text());
		});
		$toysiOutcomeSum.text(sum.toFixed(2) + ' грн.');
	};
})();