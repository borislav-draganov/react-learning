import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import webpack from 'webpack';
import express from 'express';

const devConfig: webpack.Configuration = {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        before(app: express.Application) {
            // Add Content-Encoding so that browser can read gzip-ed files
            app.get(
                '*.js',
                (req: express.Request, res: express.Response, next: express.NextFunction) => {
                    req.url = req.url + '.gz';
                    res.set('Content-Encoding', 'gzip');
                    res.set('Content-Type', 'text/javascript');
                    next();
                },
            );
        },
    },
};

const prodConfig: webpack.Configuration = {
    mode: 'production',
    optimization: {
        minimize: true,
        // TODO: Remove "as any" when @types/terser-webpack-plugin stop using @types/webpack
        minimizer: [new TerserPlugin() as any],
    },
};

const commonConfig: webpack.Configuration = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.[contenthash].js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.html', '.css', '.scss'],
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
        // TODO: Remove "as any" when types are fixed
        new CompressionPlugin() as any,
    ],
};

module.exports = (env: any) => {
    const config = env?.production ? prodConfig : devConfig;

    return Object.assign({}, config, commonConfig);
};