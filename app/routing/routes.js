var React = require('react');
var App = require("../components/app.react");
var Homepage = require("../components/pages/homepage/HomepageWrap.react.js")
var Router = require("react-router");
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Roche = require('../components/pages/projects/roche.js');
var Summit = require('../components/pages/projects/summit.js');
var Mei = require('../components/pages/projects/meilirose.js');
var Mount = require('../components/pages/projects/mountkimbie.js');
var Snap = require('../components/pages/projects/snap.js');
var Prism = require('../components/pages/projects/prism.js');
var Design = require('../components/pages/projects/designteam.js');
var Homemade = require('../components/pages/projects/panasonic.js');

module.exports = (
  <Route handler={App}>
  	<DefaultRoute name="home" handler={Homepage} />
  	<Route name="summit" path="summit" handler={Summit}/>
  	<Route name="roche-cms" path="roche-cms" handler={Roche}/>
  	<Route name="mei-li-rose" path="mei-li-rose" handler={Mei}/>
  	<Route name="mount-kimbie" path="mount-kimbie" handler={Mount}/>
  	<Route name="snap" path="snap" handler={Snap}/>
  	<Route name="prism" path="prism" handler={Prism}/>
  	<Route name="design-team" path="design-team" handler={Design}/>
    <Route name="the-makers" path="the-makers" handler={Homemade}/>
  </Route>
);