const path = require('path');

module.exports = {
    entry: './frontend/index.js',
    output: {
        path: path.resolve('public/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.webpack.js', '.js', '.jsx', '.css', '.html']
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
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