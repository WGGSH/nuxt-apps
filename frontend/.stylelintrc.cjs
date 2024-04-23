module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-recommended-vue',
    'stylelint-config-recess-order',
    'stylelint-rscss',
  ],
  ignoreFiles: ['**/*.js', '**/*.ts'],
  rules: {
    'property-no-vendor-prefix': null,
  },
};
