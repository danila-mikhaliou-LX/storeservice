using com.sap.learning as db from '../db/schema';

service StoreService @(path: '/root') {
    @odata.draft.enabled
    entity Stores          as projection on db.Stores;

    annotate Stores with @fiori.draft.enabled;

    entity Products        as projection on db.Products
        actions {
            function getAverageRating() returns Integer
        };

    annotate Products with @fiori.draft.enabled;

    entity ProductComments as projection on db.ProductComments;
    action mutate(param: String) returns String
}
