module.exports = {
  images: {
    unoptimized: true,
  },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.xml$/,
        use: 'xml-loader',
      });
      return config;
    },
  };
  