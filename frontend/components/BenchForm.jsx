var React = require('react');
var PropTypes = React.PropTypes;
var LinkedStateMixin = require('react-addons-linked-state-mixin');


var BenchForm = React.createClass({
  mixins

  render: function() {
    return (
      <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="submit" value="Create bench!" />


      </form>
    );
  }

});

module.exports = BenchForm;

// funcition on create, pass state, update state from linkin
