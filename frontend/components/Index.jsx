var React = require('react');
var BenchStore = require('../stores/BenchStore');
var ApiUtil = require('../util/ApiUtil');

var Index = React.createClass({

  getInitialState: function() {
    return {benches: BenchStore.all()};
  },

  _onChange: function() {
    this.setState({benches: BenchStore.all()});
  },

  componentDidMount: function() {
    this.benchToken = BenchStore.addListener(this._onChange);
    ApiUtil.fetchBenches();
  },

  componentWillUnmount: function() {
    this.benchToken.remove();
  },

  render: function() {
    var benches = this.state.benches.map(function(bench, index) {
      return (<li key={index}>{bench.description}</li>);
    });
    return (
      <div>
        <ul>
          {benches}
        </ul>
      </div>
    );
  }

});

module.exports = Index;
