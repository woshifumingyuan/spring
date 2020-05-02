var path = require('path');

module.exports = {
    entry: './src/main/js/app.js',
    devtool: 'sourcemaps',
    cache: true,
    mode: 'development',
    output: {
        path: __dirname,
        filename: './src/main/resources/static/built/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                  // style-loader
                  { loader: 'style-loader' },
                  // css-loader
                  {
                    loader: 'css-loader',
                    options: {
                      modules: true
                    }
                  },
                  // sass-loader
                  { loader: 'sass-loader' }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }]
            }
        ]
    }
    //     loaders: [
    //       {
    //         exclude: /node_modules/,
    //         loader: 'babel',
    //         query: {
    //           presets: ['react', 'es2015', 'stage-1']
    //         }
    //       },
    //       { test: /\.css$/, loader: "style-loader!css-loader" }
    //     ]
    //   },
    //   resolve: {
    //     extensions: ['', '.js', '.jsx', '.css']
    //   }

};