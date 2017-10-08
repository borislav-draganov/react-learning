const path = require('path');

module.exports = {
    entry: './frontend/index.tsx',
    output: {
        path: path.resolve('public/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.webpack.js', '.ts', '.tsx', '.js', '.jsx', '.css', '.html']
    },
    // Needed for request
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