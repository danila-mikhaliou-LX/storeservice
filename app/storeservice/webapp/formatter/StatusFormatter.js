sap.ui.define(["sap/ui/model/resource/ResourceModel"],
    function (ResourceModel) {
        "use strict";
        const _oResourceModel = new ResourceModel({ bundleName: 'storeservice.i18n.i18n' })
        const _oResourceBundle = _oResourceModel.getResourceBundle();

        return {

            statusText: function (sStatus) {
                switch (sStatus) {
                    case "OUT_OF_STOCK":
                        return _oResourceBundle.getText("outOfStock");
                    case "OK":
                        return _oResourceBundle.getText("ok");
                    case "STORAGE":
                        return _oResourceBundle.getText("storage");
                    default:
                        return _oResourceBundle.getText("none");
                }
            },
            statusState: function (sStatus) {
                switch (sStatus) {
                    case "OUT_OF_STOCK":
                        return "Error";
                    case "OK":
                        return "Success";
                    case "STORAGE":
                        return "Warning";
                    default:
                        return "None";
                }
            },
            statusIcon: function (sStatus) {
                switch (sStatus) {
                    case "OUT_OF_STOCK":
                        return "sap-icon://sys-cancel";
                    case "OK":
                        return "sap-icon://accept";
                    case "STORAGE":
                        return "sap-icon://warning2";
                    default:
                        return "sap-icon://incident";
                }
            }

        };
    });