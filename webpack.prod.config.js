var webpack= require('webpack');
var HTMLWebpackPlugin= require('html-webpack-plugin');
var HTMLWebpackPluginConfig= new HTMLWebpackPlugin({
    template:__dirname+ '/app/index.html',
    filename:'index.html',
    inject:'body'
})

module.exports={
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
                loader: 'style-loader!css-loader',
                include: /flexboxgrid/
            },
            { test: /vendor\/.+\.(jsx|js)$/,
                loader: 'imports?jQuery=jquery,$=jquery,this=>window'
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                loader: 'url-loader?limit=10000',
            }, {
                test: /\.(eot|ttf|wav|mp3)$/,
                loader: 'file-loader',
            }
        ]
    },
    output:{
        path:__dirname + '/build',
        filename:'bundle.js'
    },
    plugins:[HTMLWebpackPluginConfig,
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"}),

    new webpack.DefinePlugin({
    'process.env':{
        'NODE_ENV': JSON.stringify('production')
    }
}),
    new webpack.optimize.UglifyJsPlugin({
        compress:{
            warnings: true
        }
    }),
    new webpack.DefinePlugin({
        'process.env':{
            'NODE_ENV': JSON.stringify('production')
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress:{
            warnings: true
        }
    })]

}