sap.ui.define(['sap/fe/test/ObjectPage',   
    "sap/ui/test/actions/EnterText",
    "sap/ui/test/matchers/AggregationFilled", 
    "sap/ui/test/Opa5"], function(ObjectPage, EnterText, AggregationFilled, Opa5) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {
            iSearchFor: function (sSearchQuery) {
                return this.waitFor({
                    id: "storeservice::StoresObjectPage--fe::table::Products::LineItem::Products::StandardAction::BasicSearch",
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
                    id: "storeservice::StoresObjectPage--fe::table::Products::LineItem::Products-innerTable",
                    matchers: new AggregationFilled({
                        name: "items"
                    }),
                    
                    errorMessage: "The table is empty or could not be found!"
                });
            }
        }
    };

    return new ObjectPage(
        {
            appId: 'storeservice',
            componentId: 'StoresObjectPage',
            contextPath: '/Stores'
        },
        CustomPageDefinitions
    );
});