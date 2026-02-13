sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/JourneyRunner"
], function (opaTest, runner) {
    "use strict";

    function journey() {
        QUnit.module("First journey");

        opaTest("Start application", function (Given, When, Then) {
            Given.iStartMyApp();
            Then.onTheStoresList.iSeeThisPage();
        });


        opaTest("Navigate to ObjectPage", function (Given, When, Then) {
            When.onTheStoresList.onFilterBar().iExecuteSearch();
            
            Then.onTheStoresList.onTable().iCheckRows();

            When.onTheStoresList.onTable().iPressRow(0);
            Then.onTheStoresObjectPage.iSeeThisPage();

        });

        opaTest("Teardown", function (Given, When, Then) { 
            Given.iTearDownMyApp();
        });
    }

    runner.run([journey]);
});