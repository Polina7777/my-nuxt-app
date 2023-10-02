'use strict';

/**
 * review-collection service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::review-collection.review-collection');
