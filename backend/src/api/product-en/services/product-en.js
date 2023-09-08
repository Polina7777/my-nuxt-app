'use strict';

/**
 * product-en service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::product-en.product-en');
