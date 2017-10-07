const path = require('path');

module.exports = {
    entry: './frontend/index.tsx',
    output: {
        path: path.resolve('public/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.webpack.js', '.js', '.jsx', '.css', '.html', '.ts', '.tsx']
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
            }
        ]
    }
};