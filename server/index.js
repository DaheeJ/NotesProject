require('babel-polyfill')

require('babel-register')({
    presets: require.resolve('babel-preset-latest-minimal')
})

require('./server')