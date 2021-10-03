module.exports = {
    outputDir: '../keemgunn-web-v2-backend/public',
    devServer: {
        proxy: 'http://localhost:8080'
    },
    // chainWebpack: (config) => {
    //     config
    //         .plugin('html')
    //         .tap(args => {
    //             args[0].title = 'MyApp title';
    //             args[0].meta = {viewport: 'width=device-width,initial-scale=1,user-scalable=no'};
    //          return args;
    //     })
    // }
    //  into html =>  <title><%= htmlWebpackPlugin.options.title %></title>
}
