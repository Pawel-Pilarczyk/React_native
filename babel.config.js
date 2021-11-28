module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        root: ['.'],
        alias: {
          '@assets': 'awesomeproject/src/assets',
          '@components': 'awesomeproject/src/components',
          '@constants': 'awesomeproject/src/constants',
          '@screens': 'awesomeproject/src/screens',
          '@utils': 'awesomeproject/src/utils',
          '@hooks': 'awesomeproject/src/hooks',
          '@store': 'awesomeproject/src/store',
        },
      },
    ],
    'jest-hoist',
  ],
};
