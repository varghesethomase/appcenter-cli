/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the ReleaseCounts class.
 * @constructor
 * @member {array} counts
 * 
 */
function ReleaseCounts() {
}

/**
 * Defines the metadata of ReleaseCounts
 *
 * @returns {object} metadata of ReleaseCounts
 *
 */
ReleaseCounts.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ReleaseCounts',
    type: {
      name: 'Composite',
      className: 'ReleaseCounts',
      modelProperties: {
        counts: {
          required: true,
          serializedName: 'counts',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'ReleaseCountElementType',
                type: {
                  name: 'Composite',
                  className: 'ReleaseCount'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = ReleaseCounts;
