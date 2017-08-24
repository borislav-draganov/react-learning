const path = require('path');

module.exports = {
    entry: './public/index.js',
    output: {
        path: path.resolve('public/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.webpack.js', '.js', '.jsx', '.css', '.html']
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        loaders: [
            {
                test: /(\.js)|(\.jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [ "es2015", "react" ]
                }
            }
        ]
    }
};