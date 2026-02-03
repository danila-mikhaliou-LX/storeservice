sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"storeservice/test/integration/pages/StoresList",
	"storeservice/test/integration/pages/StoresObjectPage",
	"storeservice/test/integration/pages/ProductsObjectPage"
], function (JourneyRunner, StoresList, StoresObjectPage, ProductsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('storeservice') + '/test/flp.html#app-preview',
        pages: {
			onTheStoresList: StoresList,
			onTheStoresObjectPage: StoresObjectPage,
			onTheProductsObjectPage: ProductsObjectPage
        },
        async: true
    });

    return runner;
});

