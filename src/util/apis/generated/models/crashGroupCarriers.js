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
 * Initializes a new instance of the CrashGroupCarriers class.
 * @constructor
 * @member {number} [crashCount]
 * 
 * @member {array} [carriers]
 * 
 */
function CrashGroupCarriers() {
}

/**
 * Defines the metadata of CrashGroupCarriers
 *
 * @returns {object} metadata of CrashGroupCarriers
 *
 */
CrashGroupCarriers.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'CrashGroupCarriers',
    type: {
      name: 'Composite',
      className: 'CrashGroupCarriers',
      modelProperties: {
        crashCount: {
          required: false,
          serializedName: 'crash_count',
          type: {
            name: 'Number'
          }
        },
        carriers: {
          required: false,
          serializedName: 'carriers',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'CrashGroupCarrierElementType',
                type: {
                  name: 'Composite',
                  className: 'CrashGroupCarrier'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = CrashGroupCarriers;
