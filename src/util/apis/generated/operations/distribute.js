/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var util = require('util');
var msRest = require('ms-rest');
var WebResource = msRest.WebResource;

/**
 * @class
 * Distribute
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SonomaClient.
 * Initializes a new instance of the Distribute class.
 * @constructor
 *
 * @param {SonomaClient} client Reference to the service client.
 */
function Distribute(client) {
  this.client = client;
}

/**
 * Return the details for this package.
 *
 * @param {string} packageId The ID of the package
 * 
 * @param {string} ownerName The name of the owner
 * 
 * @param {string} appName The name of the application
 * 
 * @param {object} [options] Optional Parameters.
 * 
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 * 
 * @param {function} callback
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object.
 *                      See {@link PackageDetails} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
Distribute.prototype.getPackageInfo = function (packageId, ownerName, appName, options, callback) {
  var client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (packageId === null || packageId === undefined || typeof packageId.valueOf() !== 'string') {
      throw new Error('packageId cannot be null or undefined and it must be of type string.');
    }
    if (ownerName === null || ownerName === undefined || typeof ownerName.valueOf() !== 'string') {
      throw new Error('ownerName cannot be null or undefined and it must be of type string.');
    }
    if (appName === null || appName === undefined || typeof appName.valueOf() !== 'string') {
      throw new Error('appName cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  var baseUrl = this.client.baseUri;
  var requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v0.1/apps/{owner_name}/{app_name}/packages/{package_id}';
  requestUrl = requestUrl.replace('{package_id}', encodeURIComponent(packageId));
  requestUrl = requestUrl.replace('{owner_name}', encodeURIComponent(ownerName));
  requestUrl = requestUrl.replace('{app_name}', encodeURIComponent(appName));

  // Create HTTP transport objects
  var httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if(options) {
    for(var headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, function (err, response, responseBody) {
    if (err) {
      return callback(err);
    }
    var statusCode = response.statusCode;
    if (statusCode !== 200) {
      var error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      var parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          if (parsedErrorResponse.error) parsedErrorResponse = parsedErrorResponse.error;
          if (parsedErrorResponse.code) error.code = parsedErrorResponse.code;
          if (parsedErrorResponse.message) error.message = parsedErrorResponse.message;
        }
      } catch (defaultError) {
        error.message = util.format('Error "%s" occurred in deserializing the responseBody ' + 
                         '- "%s" for the default response.', defaultError.message, responseBody);
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    var result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      var parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          var resultMapper = new client.models['PackageDetails']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        var deserializationError = new Error(util.format('Error "%s" occurred in deserializing the responseBody - "%s"', error, responseBody));
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
};

/**
 * Updates a package.
 *
 * @param {string} packageId The ID of the package
 * 
 * @param {string} ownerName The name of the owner
 * 
 * @param {string} appName The name of the application
 * 
 * @param {object} [options] Optional Parameters.
 * 
 * @param {string} [options.status] The package state.<br>
 * <b>available</b>: The uploaded package has been distributed.<br>
 * <b>unavailable</b>: The uploaded package is not visible to the user. <br>
 * . Possible values include: 'available', 'unavailable'
 * 
 * @param {string} [options.releaseNotes] Release notes for this package.
 * 
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 * 
 * @param {function} callback
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
Distribute.prototype.updatePackage = function (packageId, ownerName, appName, options, callback) {
  var client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  var status = (options && options.status !== undefined) ? options.status : undefined;
  var releaseNotes = (options && options.releaseNotes !== undefined) ? options.releaseNotes : undefined;
  // Validate
  try {
    if (packageId === null || packageId === undefined || typeof packageId.valueOf() !== 'string') {
      throw new Error('packageId cannot be null or undefined and it must be of type string.');
    }
    if (ownerName === null || ownerName === undefined || typeof ownerName.valueOf() !== 'string') {
      throw new Error('ownerName cannot be null or undefined and it must be of type string.');
    }
    if (appName === null || appName === undefined || typeof appName.valueOf() !== 'string') {
      throw new Error('appName cannot be null or undefined and it must be of type string.');
    }
    if (status !== null && status !== undefined && typeof status.valueOf() !== 'string') {
      throw new Error('status must be of type string.');
    }
    if (releaseNotes !== null && releaseNotes !== undefined && typeof releaseNotes.valueOf() !== 'string') {
      throw new Error('releaseNotes must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }
  var body;
  if ((status !== null && status !== undefined) || (releaseNotes !== null && releaseNotes !== undefined)) {
      body = new client.models['PackageUpdateRequest']();
      body.status = status;
      body.releaseNotes = releaseNotes;
  }

  // Construct URL
  var baseUrl = this.client.baseUri;
  var requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v0.1/apps/{owner_name}/{app_name}/packages/{package_id}';
  requestUrl = requestUrl.replace('{package_id}', encodeURIComponent(packageId));
  requestUrl = requestUrl.replace('{owner_name}', encodeURIComponent(ownerName));
  requestUrl = requestUrl.replace('{app_name}', encodeURIComponent(appName));

  // Create HTTP transport objects
  var httpRequest = new WebResource();
  httpRequest.method = 'PATCH';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if(options) {
    for(var headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  // Serialize Request
  var requestContent = null;
  var requestModel = null;
  try {
    if (body !== null && body !== undefined) {
      var requestModelMapper = new client.models['PackageUpdateRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, body, 'body');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    var serializationError = new Error(util.format('Error "%s" occurred in serializing the ' + 
        'payload - "%s"', error.message, util.inspect(body, {depth: null})));
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, function (err, response, responseBody) {
    if (err) {
      return callback(err);
    }
    var statusCode = response.statusCode;
    if (statusCode !== 200 && statusCode !== 500) {
      var error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      var parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          if (parsedErrorResponse.error) parsedErrorResponse = parsedErrorResponse.error;
          if (parsedErrorResponse.code) error.code = parsedErrorResponse.code;
          if (parsedErrorResponse.message) error.message = parsedErrorResponse.message;
        }
      } catch (defaultError) {
        error.message = util.format('Error "%s" occurred in deserializing the responseBody ' + 
                         '- "%s" for the default response.', defaultError.message, responseBody);
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    var result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      var parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          var resultMapper = new client.models['PackageDetails']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        var deserializationError = new Error(util.format('Error "%s" occurred in deserializing the responseBody - "%s"', error, responseBody));
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }
    // Deserialize Response
    if (statusCode === 500) {
      var parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          var resultMapper = new client.models['Failure']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        var deserializationError1 = new Error(util.format('Error "%s" occurred in deserializing the responseBody - "%s"', error, responseBody));
        deserializationError1.request = msRest.stripRequest(httpRequest);
        deserializationError1.response = msRest.stripResponse(response);
        return callback(deserializationError1);
      }
    }

    return callback(null, result, httpRequest, response);
  });
};

/**
 * Return detailed information about available packages.
 *
 * @param {string} ownerName The name of the owner
 * 
 * @param {string} appName The name of the application
 * 
 * @param {object} [options] Optional Parameters.
 * 
 * @param {string} [options.filter] An OData style filter. Currently only
 * support the 'eq' comparision type. E.g. ?$filter=status eq 'Availabe'
 * 
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 * 
 * @param {function} callback
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {array} [result]   - The deserialized result object.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
Distribute.prototype.getPackages = function (ownerName, appName, options, callback) {
  var client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  var filter = (options && options.filter !== undefined) ? options.filter : undefined;
  // Validate
  try {
    if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
      throw new Error('filter must be of type string.');
    }
    if (ownerName === null || ownerName === undefined || typeof ownerName.valueOf() !== 'string') {
      throw new Error('ownerName cannot be null or undefined and it must be of type string.');
    }
    if (appName === null || appName === undefined || typeof appName.valueOf() !== 'string') {
      throw new Error('appName cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  var baseUrl = this.client.baseUri;
  var requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v0.1/apps/{owner_name}/{app_name}/packages';
  requestUrl = requestUrl.replace('{owner_name}', encodeURIComponent(ownerName));
  requestUrl = requestUrl.replace('{app_name}', encodeURIComponent(appName));
  var queryParameters = [];
  if (filter !== null && filter !== undefined) {
    queryParameters.push('$filter=' + encodeURIComponent(filter));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  var httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if(options) {
    for(var headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, function (err, response, responseBody) {
    if (err) {
      return callback(err);
    }
    var statusCode = response.statusCode;
    if (statusCode !== 200) {
      var error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      var parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          if (parsedErrorResponse.error) parsedErrorResponse = parsedErrorResponse.error;
          if (parsedErrorResponse.code) error.code = parsedErrorResponse.code;
          if (parsedErrorResponse.message) error.message = parsedErrorResponse.message;
        }
      } catch (defaultError) {
        error.message = util.format('Error "%s" occurred in deserializing the responseBody ' + 
                         '- "%s" for the default response.', defaultError.message, responseBody);
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    var result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      var parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          var resultMapper = {
            required: false,
            serializedName: 'parsedResponse',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PackageDetailsElementType',
                  type: {
                    name: 'Composite',
                    className: 'PackageDetails'
                  }
              }
            }
          };
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        var deserializationError = new Error(util.format('Error "%s" occurred in deserializing the responseBody - "%s"', error, responseBody));
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
};

/**
 * Commits or aborts the upload process for a package for the specified
 * application
 *
 * @param {string} uploadId The ID of the upload
 * 
 * @param {string} ownerName The name of the owner
 * 
 * @param {string} appName The name of the application
 * 
 * @param {string} status The desired operation for the upload. Possible
 * values include: 'committed', 'aborted'
 * 
 * @param {object} [options] Optional Parameters.
 * 
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 * 
 * @param {function} callback
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
Distribute.prototype.commitUpload = function (uploadId, ownerName, appName, status, options, callback) {
  var client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (uploadId === null || uploadId === undefined || typeof uploadId.valueOf() !== 'string') {
      throw new Error('uploadId cannot be null or undefined and it must be of type string.');
    }
    if (ownerName === null || ownerName === undefined || typeof ownerName.valueOf() !== 'string') {
      throw new Error('ownerName cannot be null or undefined and it must be of type string.');
    }
    if (appName === null || appName === undefined || typeof appName.valueOf() !== 'string') {
      throw new Error('appName cannot be null or undefined and it must be of type string.');
    }
    if (status === null || status === undefined || typeof status.valueOf() !== 'string') {
      throw new Error('status cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }
  var body;
  if (status !== null && status !== undefined) {
      body = new client.models['PackageUploadEndRequest']();
      body.status = status;
  }

  // Construct URL
  var baseUrl = this.client.baseUri;
  var requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v0.1/apps/{owner_name}/{app_name}/package_uploads/{upload_id}';
  requestUrl = requestUrl.replace('{upload_id}', encodeURIComponent(uploadId));
  requestUrl = requestUrl.replace('{owner_name}', encodeURIComponent(ownerName));
  requestUrl = requestUrl.replace('{app_name}', encodeURIComponent(appName));

  // Create HTTP transport objects
  var httpRequest = new WebResource();
  httpRequest.method = 'PATCH';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if(options) {
    for(var headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  // Serialize Request
  var requestContent = null;
  var requestModel = null;
  try {
    if (body !== null && body !== undefined) {
      var requestModelMapper = new client.models['PackageUploadEndRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, body, 'body');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    var serializationError = new Error(util.format('Error "%s" occurred in serializing the ' + 
        'payload - "%s"', error.message, util.inspect(body, {depth: null})));
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, function (err, response, responseBody) {
    if (err) {
      return callback(err);
    }
    var statusCode = response.statusCode;
    if (statusCode !== 200 && statusCode !== 400 && statusCode !== 500) {
      var error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      var parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          if (parsedErrorResponse.error) parsedErrorResponse = parsedErrorResponse.error;
          if (parsedErrorResponse.code) error.code = parsedErrorResponse.code;
          if (parsedErrorResponse.message) error.message = parsedErrorResponse.message;
        }
      } catch (defaultError) {
        error.message = util.format('Error "%s" occurred in deserializing the responseBody ' + 
                         '- "%s" for the default response.', defaultError.message, responseBody);
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    var result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      var parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          var resultMapper = new client.models['PackageUploadEndResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        var deserializationError = new Error(util.format('Error "%s" occurred in deserializing the responseBody - "%s"', error, responseBody));
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }
    // Deserialize Response
    if (statusCode === 500) {
      var parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          var resultMapper = new client.models['Failure']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        var deserializationError1 = new Error(util.format('Error "%s" occurred in deserializing the responseBody - "%s"', error, responseBody));
        deserializationError1.request = msRest.stripRequest(httpRequest);
        deserializationError1.response = msRest.stripResponse(response);
        return callback(deserializationError1);
      }
    }

    return callback(null, result, httpRequest, response);
  });
};

/**
 * Begins the upload process for a new package for the specified application
 *
 * @param {string} ownerName The name of the owner
 * 
 * @param {string} appName The name of the application
 * 
 * @param {object} [options] Optional Parameters.
 * 
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 * 
 * @param {function} callback
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
Distribute.prototype.beginUpload = function (ownerName, appName, options, callback) {
  var client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (ownerName === null || ownerName === undefined || typeof ownerName.valueOf() !== 'string') {
      throw new Error('ownerName cannot be null or undefined and it must be of type string.');
    }
    if (appName === null || appName === undefined || typeof appName.valueOf() !== 'string') {
      throw new Error('appName cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  var baseUrl = this.client.baseUri;
  var requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v0.1/apps/{owner_name}/{app_name}/package_uploads';
  requestUrl = requestUrl.replace('{owner_name}', encodeURIComponent(ownerName));
  requestUrl = requestUrl.replace('{app_name}', encodeURIComponent(appName));

  // Create HTTP transport objects
  var httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if(options) {
    for(var headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, function (err, response, responseBody) {
    if (err) {
      return callback(err);
    }
    var statusCode = response.statusCode;
    if (statusCode !== 201 && statusCode !== 500) {
      var error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      var parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          if (parsedErrorResponse.error) parsedErrorResponse = parsedErrorResponse.error;
          if (parsedErrorResponse.code) error.code = parsedErrorResponse.code;
          if (parsedErrorResponse.message) error.message = parsedErrorResponse.message;
        }
      } catch (defaultError) {
        error.message = util.format('Error "%s" occurred in deserializing the responseBody ' + 
                         '- "%s" for the default response.', defaultError.message, responseBody);
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    var result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 201) {
      var parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          var resultMapper = new client.models['PackageUploadBeginResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        var deserializationError = new Error(util.format('Error "%s" occurred in deserializing the responseBody - "%s"', error, responseBody));
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }
    // Deserialize Response
    if (statusCode === 500) {
      var parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          var resultMapper = new client.models['Failure']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        var deserializationError1 = new Error(util.format('Error "%s" occurred in deserializing the responseBody - "%s"', error, responseBody));
        deserializationError1.request = msRest.stripRequest(httpRequest);
        deserializationError1.response = msRest.stripResponse(response);
        return callback(deserializationError1);
      }
    }

    return callback(null, result, httpRequest, response);
  });
};


module.exports = Distribute;