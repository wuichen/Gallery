'use strict';

var React         = require('react/addons');
var Router        = require('react-router');
var Route         = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute  = Router.DefaultRoute;

var App           = require('./App');

var NotFoundPage  = require('./pages/NotFoundPage');
var GallaryPage  = require('./pages/GallaryPage');


module.exports = (
  <Route handler={App} path='/'>

    <DefaultRoute handler={GallaryPage} />

    <Route name='Home' path='*' handler={GallaryPage} />
 
  </Route>
);