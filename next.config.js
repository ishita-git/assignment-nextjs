module.exports = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.xml$/,
        use: 'xml-loader',
      });
      return config;
    },
  };
  