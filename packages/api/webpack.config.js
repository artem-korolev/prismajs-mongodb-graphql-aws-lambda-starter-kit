const path = require('path');
module.exports = {
  entry: "./dist/server.js",
  target: "node",
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules'), '../node_modules']
  }
};
