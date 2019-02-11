# KnackJS
Free JavaScript library for Knack developers

Hi guys,

For those people who use Knack's API, we developed a JavaScript library with common functionalities (update, create, delete, find) to simplify and speed up your development work. Here's a free version of it.

A wiki was made for the free version of the Soluntech KnackJS library.
https://github.com/SOLUNTECH/KnackJS/wiki

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

a. The method lib.create will bring you the possibility of creating a record in your object you set earlier in your code (lib.set). Example below:


    lib.create(lib.OBJECTS_ID.nameofYourObjectSet, JSON.stringify({
                                            field_36: XXX, //Choose field to enter value you wish
                                            field_37: id,
                                            field_56: date
                                        }))

b. The method lib.update will bring you the possibility of updating a record and fields in your object you set earlier in your code (lib.set). Example below:


    lib.update(lib.OBJECTS_ID.nameOfYourObjectSet, record.id, JSON.stringify({
                    field_157: account
                }))

c. Finally the method lib.delete which will bring you the option of deleting a record selected in the object

    lib.delete(self.OBJECTS_IDS.nameOfYourObjectSet, record.id)

We have two methods which permits to bring records from knack, find and findById
One of the other method of the lib is the lib.find, which allows you to bring records by a specific value from a field.


    lib.find(self.OBJECTS_IDS.objectYouSet, [{
                        field: 'field_XXX',
                        operator: 'is',
                        value: 2
                    }])
                    .then(function (response) {  ...  }); // response would be all the records with this specific value


lib.findById will allow you as the name said, to bring a record by his id.

To start using the lib, you have to initiate it in the code. All your js code will be written there.


    lib.find(self.OBJECTS_IDS.objectYouSet, idRecord).then(function (response) {  ...  }); // response would be the records with the id
                    
