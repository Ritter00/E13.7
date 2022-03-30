const path = require('path');

module.exports = {
    mode:"development",
    devtool: 'inline-source-map',
    devServer:{
        static: {
            directory: path.join(__dirname,"./dist"),
        },
        compress: true,
        //open: true,
        hot: true,
              
    },
    entry:"./src/index.js", // точка входа, можно изменить
    output: {
        filename:"main.js",
    },
    
    
}