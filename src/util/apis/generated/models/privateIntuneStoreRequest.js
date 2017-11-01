/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the PrivateIntuneStoreRequest class.
 * @constructor
 * @member {object} [targetAudience]
 * 
 * @member {string} [targetAudience.name] display name for the target
 * audience/group
 * 
 * @member {object} [appCategory]
 * 
 * @member {string} [appCategory.name] display name for the app category
 * 
 * @member {string} [tenantId] tenant id of the intune store
 * 
 */
function PrivateIntuneStoreRequest() {
}

/**
 * Defines the metadata of PrivateIntuneStoreRequest
 *
 * @returns {object} metadata of PrivateIntuneStoreRequest
 *
 */
PrivateIntuneStoreRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PrivateIntuneStoreRequest',
    type: {
      name: 'Composite',
      className: 'PrivateIntuneStoreRequest',
      modelProperties: {
        targetAudience: {
          required: false,
          serializedName: 'target_audience',
          type: {
            name: 'Composite',
            className: 'IntuneTargetAudience'
          }
        },
        appCategory: {
          required: false,
          serializedName: 'app_category',
          type: {
            name: 'Composite',
            className: 'IntuneAppCategory'
          }
        },
        tenantId: {
          required: false,
          serializedName: 'tenant_id',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = PrivateIntuneStoreRequest;
