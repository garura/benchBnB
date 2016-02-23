/* globals google */
var React = require('react');
var BenchStore = require('../stores/BenchStore');
var ApiUtil = require('../util/ApiUtil');

var Map = React.createClass({
  getInitialState: function() {
    this.markers = [];
    return null;
  },

  componentDidMount: function(){
    var mapDOMNode = this.refs.map;
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    var that = this;
    this.idleFetch = this.map.addListener('idle', function() {
      var bounds = that.map.getBounds();
      bounds = {northEast:{"lat":bounds.getNorthEast().lat(),
                             "lng":bounds.getNorthEast().lng() },
                "southWest":{"lat":bounds.getSouthWest().lat(),
                             "lng":bounds.getSouthWest().lng() }};
                             console.log(bounds);
      ApiUtil.fetchBenches(bounds);
    });
    this.benchToken = BenchStore.addListener(this._handleChange);
  },

  componentWillUnmount: function() {
    this.benchToken.remove();
    this.map.event.removeListener(this.idleFetch);
  },

  _handleChange: function() {
    this.markers.forEach(function(marker) {
      marker.setMap(null);
    });
    this.markers = [];
    this.setState({ benches: BenchStore.all() });

    var that = this;
    this.state.benches.forEach(function(bench) {
      var location = {lat: bench.lat, lng: bench.lng};
      var marker = new google.maps.Marker({
        position: location,
        map: that.map,
        title: bench.description
      });
      that.markers.push(marker);
    });
  },

  render: function() {

    return (
      <div className='map' ref='map' />
    );
  }

});



module.exports = Map;
