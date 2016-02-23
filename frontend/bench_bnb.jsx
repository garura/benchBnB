var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Search = require('./components/Search');

  var App = React.createClass({
    render: function(){
      return (
          <div>
            <header><h1>Bench BnB</h1></header>
            {this.props.children}
          </div>
      );
    }
  });
  var routes = (
      <Route path="/" component={App}>
        <IndexRoute component={Search}/>
      </Route>
  );

$(function() {
  ReactDOM.render(<Router>{routes}</Router>,
    document.getElementById('content'));
});
