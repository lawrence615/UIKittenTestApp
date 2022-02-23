module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.js'],
        alias: {
          // components: './src/presentation/components',
          navigation: './src/presentation/navigation',
          screens: './src/presentation/screens',
          assets: './src/assets',
          slices: './src/application/slices',
          selectors: './src/application/selectors',
          api: './src/infrastructure/api'
        }
      }
    ],

  ]
};
