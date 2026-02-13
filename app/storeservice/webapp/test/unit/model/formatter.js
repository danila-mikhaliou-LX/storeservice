sap.ui.define([
    "storeservice/formatter/StatusFormatter",
    "sap/ui/model/resource/ResourceModel",
], function (StatusFormatter, ResourceModel) {
    "use strict";

    QUnit.module("Status State Formatter");

    function statusStateTest(assert, sStatus, sExpected) {
        var sState = StatusFormatter.statusState(sStatus);
        assert.strictEqual(sState, sExpected, "Status '" + sStatus + "' should return '" + sExpected + "'");
    }

    QUnit.test("Checking right status state", function (assert) {
        statusStateTest(assert, "OK", "Success");
        statusStateTest(assert, "OUT_OF_STOCK", "Error");
        statusStateTest(assert, "", "None");
        statusStateTest(assert, "STORAGE", "Warning");
    });
    QUnit.test('Checkig right status text', function (assert ){
        const oResourceModel = new ResourceModel ({
            bundleUrl : sap.ui.require.toUrl("storeservice/i18n/i18n.properties"),
        })
        const oControllerMock = {
            getOwnerComponent() {
                return {
                    getModel() {
                        return oResourceModel;
                    }
                };
            }
        };
        const formatter = StatusFormatter.statusText.bind(oControllerMock);

        assert.strictEqual(formatter("OUT_OF_STOCK"), "Out of stock", "Is correct");
        assert.strictEqual(formatter("OK"), "OK", "Is correct");
        assert.strictEqual(formatter("STORAGE"), "Storage", "Is correct");
    })

});