var React = require('react');
var App = require("../components/app.react");
var Homepage = require("../components/pages/homepage/HomepageWrap.react.js")
var Router = require("react-router");
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Roche = require('../components/pages/projects/roche.js');
var Forward = require('../components/pages/projects/forward.js');
var Mei = require('../components/pages/projects/meilirose.js');

module.exports = (
  <Route handler={App}>
  	<DefaultRoute name="home" handler={Homepage} />
  	<Route name="forward" path="forward" handler={Forward}/>
  	<Route name="roche-cms" path="roche-cms" handler={Roche}/>
  	<Route name="mei-li-rose" path="mei-li-rose" handler={Mei}/>
  </Route>
);