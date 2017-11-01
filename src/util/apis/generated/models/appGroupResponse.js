/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the AppGroupResponse class.
 * @constructor
 * @member {string} id The unique ID (UUID) of the app
 * 
 * @member {string} groupId The unique ID (UUID) of the group that the app
 * belongs to
 * 
 * @member {string} [displayName] The display name of the app
 * 
 * @member {string} name The name of the app used in URLs
 * 
 * @member {string} os The OS the app will be running on. Possible values
 * include: 'Android', 'iOS', 'macOS', 'Tizen', 'tvOS', 'Windows', 'Custom'
 * 
 * @member {string} platform The platform of the app. Possible values include:
 * 'Java', 'Objective-C-Swift', 'UWP', 'Cordova', 'React-Native', 'Unity',
 * 'Xamarin', 'Unknown'
 * 
 */
function AppGroupResponse() {
}

/**
 * Defines the metadata of AppGroupResponse
 *
 * @returns {object} metadata of AppGroupResponse
 *
 */
AppGroupResponse.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'AppGroupResponse',
    type: {
      name: 'Composite',
      className: 'AppGroupResponse',
      modelProperties: {
        id: {
          required: true,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        groupId: {
          required: true,
          serializedName: 'group_id',
          type: {
            name: 'String'
          }
        },
        displayName: {
          required: false,
          serializedName: 'display_name',
          type: {
            name: 'String'
          }
        },
        name: {
          required: true,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        os: {
          required: true,
          serializedName: 'os',
          type: {
            name: 'String'
          }
        },
        platform: {
          required: true,
          serializedName: 'platform',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = AppGroupResponse;
