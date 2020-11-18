import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import webpack from 'webpack';
import express from 'express';
import merge from 'webpack-merge';

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
        minimizer: [new TerserPlugin()],
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
                            modules: {
                                localIdentName: '[local]-[hash:base64:5]',
                            },
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
        new CompressionPlugin(),
    ],
};

export default (env: { production: boolean }) => {
    const envConfig = env?.production ? prodConfig : devConfig;

    return merge(commonConfig, envConfig);
};
