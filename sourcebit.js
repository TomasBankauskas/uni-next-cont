const _ = require('lodash');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  plugins: [
    {
      module: require('sourcebit-source-contentful'),
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        deliveryToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
        previewToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
        preview: isDev,
        watch: isDev,
        pollingInterval: 2000
      }
    },
    {
      module: require('sourcebit-target-next'),
      options: {
        liveUpdate: isDev,
        pages: (data) => {
          const siteConfig = _.find(data, _.matchesProperty('__metadata.modelName', 'siteConfig'));
          const pages = _.filter(data, _.matchesProperty('__metadata.modelName', 'page'));
          return _.map(pages, (page) => {
            return {
              path: page.slug,
              page: page,
              siteConfig: siteConfig
            };
          });
        }
      }
    }
  ]
};
