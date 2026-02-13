sap.ui.define([
    "sap/fe/test/ListReport",
    "sap/ui/test/actions/EnterText",
    "sap/ui/test/matchers/AggregationFilled", 
    "sap/ui/test/Opa5"
], function (ListReport, EnterText, AggregationFilled, Opa5) {
    "use strict";

    var CustomPageDefinitions = {
        actions: {
            iSearchFor: function (sSearchQuery) {
                return this.waitFor({
                    id: "storeservice::StoresList--fe::FilterBar::Stores::BasicSearchField-inner",
                    actions: new EnterText({
                        text: sSearchQuery,
                        pressEnterKey: true
                    }),
                    errorMessage: "Cannot find SearchField by id"
                });
            }
        },
        assertions: {
            theListShouldHaveResult: function () {
                return this.waitFor({
                    id: "storeservice::StoresList--fe::table::Stores::LineItem-innerTable",
                    matchers: new AggregationFilled({
                        name: "items"
                    }),
                    errorMessage: "The table is empty or could not be found!"
                });
            }
        }
    };

    return new ListReport(
        {
            appId: "storeservice",
            componentId: "StoresList",
            contextPath: "/Stores"
        },
        CustomPageDefinitions
    );
});