var loading = null;
Ti.App.addEventListener('showLoading', function(e) {

	if (!loading) {
		var loading = require('lib/loading');
	}
	loading.show();

	Ti.App.addEventListener('hideLoading', function(e) {
		loading.hide();
	});
});

Ti.App.addEventListener('openLoginWindow', function() {
	Ti.App.catalogTab.active = true;

	var LoginWin = require('/ui/common/auth/loginWin');

	var loginWin = new LoginWin();
	Ti.App.catalogTab.open(loginWin);

	Ti.App.addEventListener('closeLoginWindow', function(e) {

		Ti.App.catalogTab.close(loginWin);
	});
});

Ti.App.addEventListener('openRegisterWindow', function(e) {
	var RegisterWin = require('/ui/common/auth/registerWin');

	Ti.App.catalogTab.active = true;

	var registerWin = new RegisterWin();

	Ti.App.catalogTab.open(registerWin);

	Ti.App.addEventListener('closeRegisterWindow', function(e) {

		Ti.App.catalogTab.close(registerWin);
	});
});

Ti.App.addEventListener('openForgetpasswordWindow', function(e) {

	var ForgetpasswordWin = require('/ui/common/auth/forgetpasswordWin');

	var forgetpasswordWin = new ForgetpasswordWin();

	Ti.App.catalogTab.open(forgetpasswordWin);

	Ti.App.addEventListener('closeForgetpasswordWindow', function(e) {

		Ti.App.catalogTab.close(forgetpasswordWin);
	});
});

Ti.App.addEventListener('openAboutWindow', function() {
	var AboutWin = require('/ui/common/aboutWin');

	var AboutWin = new AboutWin();

	AboutWin.open();

});

Ti.App.addEventListener('openCurrencyWindow', function() {
	var currencyWin = require('/ui/common/currencyWin');

	var currencyWin = new currencyWin();

	currencyWin.open();

});

Ti.App.addEventListener('openChargeWalletWindow', function() {
	var chargeWalletWin = require('/ui/common/chargeWalletWin');

	var chargeWalletWin = new chargeWalletWin();

	chargeWalletWin.open();

});

Ti.App.addEventListener('openCategoryWindow', function(e) {
	var CategoryWin = require('ui/common/categoryWin');

	Ti.App.catalogTab.open(new CategoryWin(e.parent));
});

Ti.App.addEventListener('openProductListWindow', function(e) {
	var ProductsListWin = require('ui/common/productsListWin');

	Ti.App.catalogTab.open(new ProductsListWin(e.data));
});

Ti.App.addEventListener('openProductWindow', function(e) {

	var ProductWin = require('/ui/common/productWin');

	var productWin = new ProductWin(e.data);
	Ti.App.catalogTab.open(productWin);

	Ti.App.addEventListener('closeProductWindow', function(e) {

		Ti.App.catalogTab.close(productWin);
	});
});

Ti.App.addEventListener('openOrderProductsWindow', function(e) {

	var orderProductsWin = require('/ui/common/orderProductsWin');

	Ti.App.orderTab.open(new orderProductsWin(e.data));
	//var timer = setInterval(Ti.App.orderProductsTable.fireEvent('cleartable'), 10000);

});

Ti.App.addEventListener('cartAdd', function(e) {

	var cart = Ti.App.Properties.getObject('cart', {});

	cart[e.productID] = e.quantity;
	Ti.App.Properties.setObject('cart', cart);

	alert(Ti.App.Properties.getObject('cart'));
});

Ti.App.addEventListener('cartEmpty', function(e) {
	Ti.App.Properties.setObject('cart', {});
});

function cartQuantityByProductID(productID) {

	var cart = Ti.App.Properties.getObject('cart', {});

	return cart[productID] == undefined ? 0 : cart[productID];
}

function autoTextAlign(e) {
	if (e.value.length == 0) {
		e.source.setTextAlign('right');
	} else {
		e.source.setTextAlign('left');
	}
}