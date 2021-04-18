// When the container app tries to load the MFE, everything should be in one JS file.
//   But if you look at the above asset-manifest.json you can see there are multiple chunks available.
//   We must disable the chunking.
//   To do this, we will use thereact-app-rewired package.
//   Using this, we can override the build config without ejecting the app.
//   Create config-overrides.js in the root level of Cats application and add the following content.

module.exports = {
  webpack: (config, env) => {
    config.optimization.runtimeChunk = false;
    config.optimization.splitChunks = {
      cacheGroups: {
        default: false,
      },
    };

    config.output.filename = "static/js/[name].js";

    config.plugins[5].options.filename = "static/css/[name].css";
    config.plugins[5].options.moduleFilename = () => "static/css/main.css";
    return config;
  },
};