sap.ui.define([
    "sap/ui/test/opaQunit",
    "storeservice/test/integration/pages/StoresList",
    "storeservice/test/integration/pages/StoresObjectPage", 
    "storeservice/test/integration/pages/ProductsObjectPage"
     
], function (opaTest) {
    "use strict";

    QUnit.module("Searching With Ok status");

    opaTest("filtering by Lake", function (Given, When, Then) {
        Given.iStartMyApp();

        When.onTheStoresList.iSearchFor("Lake");
        Then.onTheStoresList.theListShouldHaveResult();

        When.onTheStoresList.onTable().iPressRow(0);
        Then.onTheStoresObjectPage.iSeeThisPage();

        When.onTheStoresObjectPage.iSearchFor('Ok');
        Then.onTheStoresObjectPage.theListShouldHaveResult();

        Then.iTeardownMyApp();
    });
});