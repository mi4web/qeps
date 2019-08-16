const R = require('ramda');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const reactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin;
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

module.exports = function (config) {
    config.devtool = false;
    /*config.output.filename = 'educationwebassets/static/js/bundle.[chunkhash:8].js';
    config.output.chunkFilename = 'educationwebassets/static/js/[name].[chunkhash:8].js';
    config.output.publicPath = '/';//process.env.REACT_APP_ENV === 'development' ? '/' : '//assetscdn1.paytm.com/';
    const miniCssExtractPluginIndex = R.findIndex(plugin => plugin instanceof MiniCssExtractPlugin, config.plugins);
    config.plugins[miniCssExtractPluginIndex] = new MiniCssExtractPlugin({
        filename: 'educationwebassets/static/css/[name].[chunkhash:8].css',
        chunkFilename: 'educationwebassets/static/css/[name].[chunkhash:8].chunk.css'
    });*/
    config.plugins.push(new reactLoadablePlugin({
        filename: 'build/react-loadable.json',
    }));
    /*config.module.rules.unshift({
        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[path][name]-[hash:8].[ext]'
                },
            },
        ]
    });*/
    // remove restriction that source files can't be outside src folder
    config.resolve.plugins = config.resolve.plugins.filter(function (p) {
        return R.not(p instanceof ModuleScopePlugin);
    });
}
