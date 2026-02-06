using StoreService as service from '../../srv/store-service';

annotate service.Stores with @(
    UI.FieldGroup #GeneratedGroup: {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Label: '{i18n>name}',
                Value: Name,
            },
            {
                $Type: 'UI.DataField',
                Label: '{i18n>email}',
                Value: Email,
            },
            {
                $Type: 'UI.DataField',
                Label: '{i18n>phoneNumber}',
                Value: PhoneNumber,
            },
            {
                $Type: 'UI.DataField',
                Label: '{i18n>Address}',
                Value: Address,
            },
            {
                $Type: 'UI.DataField',
                Label: '{i18n>established}',
                Value: Established,
            },
            {
                $Type: 'UI.DataField',
                Label: '{i18n>floorArea}',
                Value: FloorArea,
            },
        ],
    },
    UI.Facets                    : [
        {
            $Type : 'UI.ReferenceFacet',
            ID    : 'GeneratedFacet1',
            Label : 'Store Information',
            Target: '@UI.FieldGroup#GeneratedGroup',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Products',
            ID    : 'Products',
            Target: 'Products/@UI.LineItem#Products',
        },
    ],
    UI.LineItem                  : [

        {
            $Type: 'UI.DataField',
            Label: '{i18n>name}',
            Value: Name,
        },
        {
            $Type: 'UI.DataField',
            Label: '{i18n>email}',
            Value: Email,
        },
        {
            $Type: 'UI.DataField',
            Label: '{i18n>phoneNumber}',
            Value: PhoneNumber,
        },
        {
            $Type: 'UI.DataField',
            Label: '{i18n>address}',
            Value: Address,
        },
        {
            $Type: 'UI.DataField',
            Label: '{i18n>established}',
            Value: Established,
        },
    ],
    UI.HeaderInfo                : {
        Title         : {
            $Type: 'UI.DataField',
            Value: Name,
        },
        TypeName      : '{i18n>store}',
        TypeNamePlural: '{i18n>stores}',
    },
    UI.HeaderFacets              : [

    ],
    UI.FieldGroup #StoreInfo     : {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Value: Address,
                Label: '{i18n>address}',
            },
            {
                $Type: 'UI.DataField',
                Value: Email,
                Label: '{i18n>email}',
            },
            {
                $Type: 'UI.DataField',
                Value: Established,
                Label: '{i18n>established}',
            },
            {
                $Type: 'UI.DataField',
                Value: FloorArea,
                Label: '{i18n>floorArea}',
            },
            {
                $Type: 'UI.DataField',
                Value: PhoneNumber,
                Label: '{i18n>phoneNumber}',
            },
        ],
    },
);

annotate service.Products with @(

    UI.HeaderInfo             : {
        Title         : {
            $Type: 'UI.DataField',
            Value: Name,
        },
        TypeName      : '{i18n>product}',
        TypeNamePlural: '{i18n>products}',
    },
    UI.LineItem #Products     : [
        {
            $Type            : 'UI.DataField',
            Label            : '{i18n>name}',
            Value            : Name,
            ![@UI.Importance]: #High,

        },
        {
            $Type            : 'UI.DataFieldForAnnotation',
            Target           : '@UI.DataPoint#Rating',
            Label            : '{i18n>rating}',
            ![@UI.Importance]: #High

        },
        {
            $Type            : 'UI.DataField',
            Value            : ProductionCompanyName,
            Label            : '{i18n>productionCompany}',
            ![@UI.Importance]: #High
        },
        {
            $Type            : 'UI.DataField',
            Value            : Price_amount,
            Label            : '{i18n>price}',
            ![@UI.Importance]: #High
        },
        {
            $Type            : 'UI.DataField',
            Value            : Price_currency,
            Label            : '{i18n>currency}',
            ![@UI.Importance]: #High
        },
        {
            $Type            : 'UI.DataField',
            Value            : MadeIn,
            Label            : '{i18n>madeIn}',
            ![@UI.Importance]: #High
        },
    ],
    UI.DataPoint #Rating      : {
        Value        : Rating,
        Visualization: #Rating,
        TargetValue  : 5,
    },
    UI.Facets                 : [{
        $Type : 'UI.ReferenceFacet',
        Label : '{i18n>productInfo}',
        ID    : 'ProductInfo',
        Target: '@UI.FieldGroup#ProductInfo',
    }, ],
    UI.FieldGroup #ProductInfo: {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Value: Name,
                Label: '{i18n>name}',
            },
            {
                $Type: 'UI.DataField',
                Value: Status,
                Label: '{i18n>status}',
            },
            {
                $Type: 'UI.DataField',
                Value: Price_amount,
                Label: '{i18n>price}',
            },
            {
                $Type: 'UI.DataField',
                Value: Price_currency,
                Label: '{i18n>currency}',
            },
            {
                $Type: 'UI.DataField',
                Value: ProductionCompanyName,
                Label: '{i18n>productionCompany}',
            },
            {
                $Type: 'UI.DataField',
                Value: Rating,
                Label: '{i18n>rating}',
            },
            {
                $Type: 'UI.DataField',
                Value: Specs,
                Label: '{i18n>specs}',
            },
            {
                $Type: 'UI.DataField',
                Value: SupplierInfo,
                Label: '{i18n>supplierInfo}',
            },
            {
                $Type: 'UI.DataField',
                Value: MadeIn,
                Label: '{i18n>madeIn}',
            },
        ],
    },
);