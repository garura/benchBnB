var React = require('react');
var Map = require('./Map');
var Index = require('./Index');

var Search = React.createClass({

  render: function() {
    return (
      <div>
        <Map />
        <Index />
      </div>
    );
  }
});

module.exports = Search;
