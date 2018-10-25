# KnackJS
Free JavaScript library for Knack developers

Hi guys,

For those persons who use Knack, we developed a library for Knack with functionalities to simplify our js code. We share with you a free version of it.

A wiki was made for the free version of the Soluntech KnackJS library.
https://github.com/SOLUNTECH/KnackJS/wiki

Make sure you use it.

To start using the lib, you have to initiate it in the code. All your js code will be written there.


    KnackInitAsync = function ($, callback) {

    window.$ = $;
    window.LazyLoad = LazyLoad;

    LazyLoad.js(['https://s3.amazonaws.com/soluntech-www/KnackJS/free-lib-soluntech.js'], function () {

        var lib = new Soluntech({
            applicationID: 'ID IN KNACK',
            restAPIkey: 'API KEY IN KNACK',
            environment: 'development',
        });

        lib.set('OBJECTS_IDS', {
            BuyerInvoice: 'object_XX',
            ContractInvoice: 'object_XX',
            SupplierInvoice: 'object_XX',
            TimeExpense: 'object_XX'
        });

        callback();
    }); };

1. You have to find and set your appID and restAPIkey in Knack
2. You have a function called lib set which will allows you to set the object of knack and then later update, create, delete the records there.
