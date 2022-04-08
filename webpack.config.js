const path = require("path")
// npm run build:w
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(".", "build"),  // folder
        filename: "bundle.js"               // filename
    },
    mode: "development",  // faster
    //mode: "production",  //  Slower
    //by default mode is production. only 2 mode
    // when project completed then change mode to production and deploy
    module: {
        rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }],
    },
}