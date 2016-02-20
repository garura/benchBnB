var React = require('react');
var ReactDOM = require('react-dom');
var BenchStore = require('./stores/BenchStore');
var ApiUtil = require('./util/ApiUtil');
var Index = require('./components/Index');
var Search = require('./components/Search');

$(function() {
  ReactDOM.render(<Search />, document.getElementById('content'));
});
