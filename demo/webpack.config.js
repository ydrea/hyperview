const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync({
    ...env,
    babel: {
      dangerouslyAddModulePathsToTranspile: ['hyperview'],
    },
    externals: {
      "react-native": true
    },
    resolve: {
      alias: {
        'react-native-svg': 'react-native-svgxml-web'}
    }
  }, argv);
  return config;
};
