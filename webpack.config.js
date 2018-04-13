module.exports={

    entry:'./src/js/index.js',
    output:{
        filename:'bundle.js'
    },

    devServer: {
        host:"localhost",
        port: 8080,
        historyApiFallback: true
    },
    module:{
        rules:[
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
           { test: /\.css$/, loader: "style-loader!css-loader" 
        
           },
           { test: /\.(png||jpe?g|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
           {  test: /\.(png|jpg|gif)$/, loader:'loader:file-loader' }
        ]
    }
}