/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a DatabaseCollection.
 */
class DatabaseCollection {
  /**
   * Create a DatabaseCollection.
   * @property {string} id
   * @property {string} name
   */
  constructor() {
  }

  /**
   * Defines the metadata of DatabaseCollection
   *
   * @returns {object} metadata of DatabaseCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DatabaseCollection',
      type: {
        name: 'Composite',
        className: 'DatabaseCollection',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
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
          }
        }
      }
    };
  }
}

module.exports = DatabaseCollection;