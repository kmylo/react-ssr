const path = require('path');

module.exports = {
    mode: 'development',

    context: path.resolve(__dirname, 'src/client'),

    entry: {
        app: './index.js',
    },

    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist/static'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ],
    },
    devServer: {
        open: true
    },

    devtool: 'inline-source-map',
};
