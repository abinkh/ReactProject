var webpack= require('webpack');
var HTMLWebpackPlugin= require('html-webpack-plugin');
var HTMLWebpackPluginConfig= new HTMLWebpackPlugin({
    template:__dirname+ '/app/index.html',
    filename:'index.html',
    inject:'body'
})

module.exports={
    devtool:'#eval-source-map',
    entry: __dirname + '/app/index.js',
    module:{
        loaders:[
            {test:/\.jsx?$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                query:{presets:['react','es2015']}
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules',
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" ,// translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"}
        ]
    },
    plugins:[HTMLWebpackPluginConfig,
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"})]


}