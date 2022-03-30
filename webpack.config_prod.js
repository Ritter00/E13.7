const path = require('path');

module.exports = {
    
    devtool: 'inline-source-map',
    devServer:{
        static: {
            directory: path.join(__dirname,"./dist"),
        },
        compress: true,
        open: true,
        
              
    },
    entry:"./src/index.js", // точка входа, можно изменить
    output: {
        filename:"main1.js",
    },
    
    
}