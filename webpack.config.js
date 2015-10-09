module.exports = {
    entry:  './src',
    output: {
        path:       'builds',
        filename:   'bundle.js',
        publicPath: 'builds/',
    },
    module: {
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
