//const outputPlugin = require('atomize-css/outputplugin');

module.exports = {
    src: './template.html',
   // output: 'dist/template.html',
    dest: 'dist/template.html',
   /* plugins: [
        new outputPlugin({
            type: 'outputplugin',

        })
    ],*/
    rules: `
        .customclass{
            width: 100%;
        }

        .customclass(){
         width: 100%;
        }
    `,

}