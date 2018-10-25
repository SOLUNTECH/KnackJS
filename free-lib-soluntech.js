/*
    Soluntech Library to Knack applications
    Soluntech - 2018
    www.soluntech.com
*/
var Soluntech = function (info) {

    console.log(window.LazyLoad);

    // Knack info
    this.applicationID = info.applicationID;
    this.restAPIkey = info.restAPIkey;
    this.knackURL = info.knackURL || 'https://api.knackhq.com/v1/';
    this.jQuery = info.jQuery || window.$;

    // Environment info
    this.environment = info.environment || 'production';
    this.isProduction = this.environment === 'production';
    this.isDevelopment = this.environment === 'development';

    // Internal info
    this.$spinnerBackdrop = null;

    // External libraries
    this.libraries = info.libraries || {
        async: {
            url: 'https://cdnjs.cloudflare.com/ajax/libs/async/2.4.1/async.min.js',
            loaded: false,
            objectName: 'async'
        },
        jquery: {
            url: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js',
            loaded: false,
            objectName: 'jQuery'
        }
    };

    // Check compatibility
    this.assert(Knack || window.Knack, 'Error, this library only run on Knack applications');
    this.assert(this.jQuery, 'Error, jQuery instance is required');
};

Object.defineProperty(Soluntech.prototype, '$', {
    get: function () {

        return window.jQuery || this.jQuery || window.$;
    }
});

Soluntech.prototype.set = function (key, value) {

    Object.defineProperty(Soluntech.prototype, key, {
        get: function () {

            return value;
        }
    });
};

Soluntech.prototype.assert = function (cond, message) {

    if (!cond) {
        throw new Error(message);
    }
};

Object.defineProperty(Soluntech.prototype, 'headers', {
    get: function () {

        return {
            'X-Knack-Application-ID': this.applicationID,
            'X-Knack-REST-API-Key': this.restAPIkey,
            'content-type': 'application/json'
        };
    }
});

Soluntech.prototype.find = function (objectId, filters, sortField, sortOrder, recordPerPage) {

    filters = filters || [];
    sortOrder = sortOrder || '';
    sortField = sortField || '';
    recordPerPage = recordPerPage || 'all';

    var filterValEnc = encodeURIComponent(JSON.stringify(filters));
    var sortFEnc = encodeURIComponent(sortField);
    var sortOEnc = encodeURIComponent(sortOrder);

    return this.$.ajax({
        type: 'GET',
        headers: this.headers,
        url:  this.knackURL + 'objects/' + objectId + '/records?rows_per_page=' + recordPerPage +
                '&filters=' + filterValEnc + "&sort_field=" + sortFEnc + "&sort_order=" +
                sortOEnc
    });
};

Soluntech.prototype.findById = function (objectId, id) {

    return this.$.ajax({
        type: 'GET',
        headers: this.headers,
        url:  this.knackURL + 'objects/' + objectId + '/records/' + id
    });
};

Soluntech.prototype.update = function (objectId, id, data) {

    return this.$.ajax({
        type: 'PUT',
        headers: this.headers,
        url:  this.knackURL + 'objects/' + objectId + '/records/' + id,
        data: data
    });
};

Soluntech.prototype.delete = function (objectId, id) {

    return this.$.ajax({
        type: 'DELETE',
        headers: this.headers,
        url:  this.knackURL + 'objects/' + objectId + '/records/' + id
    });
};

Soluntech.prototype.create = function (objectId, data) {

    return this.$.ajax({
        type: 'POST',
        headers: this.headers,
        url:  this.knackURL + 'objects/' + objectId + '/records',
        data: data
    });
};
