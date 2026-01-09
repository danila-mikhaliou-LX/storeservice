sap.ui.define([
    "sap/ui/core/Control",
    "sap/m/VBox",
    "sap/m/FeedInput",
    "sap/m/List",
    "sap/m/FeedListItem",
    "sap/m/RatingIndicator",
    "sap/m/Input"
], function (Control, VBox, FeedInput, List, FeedListItem, RatingIndicator, Input) {
    "use strict";



    return Control.extend("storeservice.ext.control.Feedback", {
        metadata: {
            aggregations: {
                _content: { type: "sap.m.VBox", multiple: false, visibility: "hidden" }
            }
        },

        init() {
            this._oFeedInput = new FeedInput({
                post: this._onPost.bind(this)
            }).addStyleClass("sapUiSmallMarginBottom");

            this._oRatingIndicator = new RatingIndicator({
                maxValue: 10,
            }).addStyleClass('sapUiSmallMarginBegin')

            this._oAuthorInput = new Input({
                placeholder: "Author",
                width: '20%'
            }).addStyleClass('sapUiSmallMarginBegin sapUiSmallMarginBottom')

            this._oList = new List({
                items: {
                    path: "Comment",
                    template: new FeedListItem({
                        sender: "{Author}",
                        timestamp: "{Posted}",
                        text: "{Message}",
                        info: "Rating : {Rating}"
                    })
                }
            });

            this.setAggregation("_content", new VBox({
                items: [this._oFeedInput, this._oAuthorInput, this._oRatingIndicator, this._oList]
            }));
        },

        _onPost(oEvent) {
            const oContext = this.getBindingContext();
            const oModel = oContext.getModel()
            const oListBinding = oContext.getModel()

            const sAuthor = this._oAuthorInput.getValue();
            const sRating = this._oRatingIndicator.getValue();
            const sText = oEvent.getParameter("value");

            oListBinding.bindList("Comment", oContext, null, null, { $$updateGroupId: "commentsGroup" }).create({
                Author: sAuthor,
                Message: sText,
                Rating: sRating,
                Posted: new Date().toISOString().slice(0, 10)
            })
            oModel.submitBatch('commentsGroup').then(() => {
                this._oFeedInput.setValue("");
                this._oRatingIndicator.setValue("");
                this._oAuthorInput.setValue("");
                oContext.refresh()
            })
                .catch((oError) => {
                    console.error(
                        'Error posting: ', oError
                    )
                })
        },

        renderer(oRm, oControl) {
            oRm.openStart("div", oControl)
                .class("sapUiSmallMargin")
                .openEnd();
            oRm.renderControl(oControl.getAggregation("_content"));
            oRm.close("div");
        }
    });
});