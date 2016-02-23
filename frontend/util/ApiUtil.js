var ApiActions = require('../actions/ApiActions');

var ApiUtil = {
  fetchBenches: function(bounds) {
    $.ajax({
      url: 'api/benches',
      type: 'GET',
      dataType: 'json',
      data: {bounds: bounds},
      success: function(benches) {
        ApiActions.receiveAll(benches);
      }
    });
  },
//(:bench).permit(:description, :lat, :lng)
  createBench: function(bench) {
    $.ajax({
      url: "api/benches",
      type: 'POST',
      dataType: 'json',
      data: {bench: bench},
      success: function(bench) {
        console.log(bench);
        //apiaction make bench in store
      }
    });
  }
};
window.ApiUtil = ApiUtil;
module.exports = ApiUtil;
