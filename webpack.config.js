var webpack = require('webpack');

module.exports = {
    entry:   './src',
    output:  {
        path:       'builds',
        filename:   'bundle.js',
        publicPath: 'builds/',
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name:      'main', // Move dependencies to our main file
            children:  true, // Look for common dependencies in all children,
            minChunks: 2, // How many times a dependency must come up before being extracted
        }),
    ],
    module:  {
        loaders: [
            {
                test:    /\.js/,
                loader:  'babel',
                include: __dirname + '/src',
            },
            {
                test:   /\.scss/,
                loader: 'style!css!sass',
            },
            {
                test:   /\.html/,
                loader: 'html',
            }
        ],
    }
};
