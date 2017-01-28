var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home');

var routes = (
  <Router>
    {/* no matter what component, main is active  */}
    <Route path='/' component={Main}>
    {/* routes inside of each other are children */}
      <Route path='/home'component={Home}/>
    </Route>
  </Router>
)

module.exports = routes
