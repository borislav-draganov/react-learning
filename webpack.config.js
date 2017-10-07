const path = require('path');

module.exports = {
    entry: './frontend/index.js',
    output: {
        path: path.resolve('public/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.webpack.js', '.js', '.jsx', '.css', '.html', '.tsx']
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    module: {
        loaders: [
            {
                test: /(\.ts)|(\.tsx)$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
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