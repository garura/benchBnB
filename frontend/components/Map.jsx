/* globals google */

var React = require('react');
var BenchStore = require('../stores/BenchStore');

var Map = React.createClass({
  componentDidMount: function(){
    var mapDOMNode = this.refs.map;
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
  },

  render: function() {
    return (
      <div className='map' ref='map' />
    );
  }

});

module.exports = Map;
