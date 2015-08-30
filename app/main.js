var React = require('react');
var Router = require("react-router");
var routes = require("./routing/routes");
var stateTree = require('./data/stateTree.js')

Router.run(routes, (Root, state) => {
  React.render(<Root {...state} tree={stateTree} />, document.body);
});