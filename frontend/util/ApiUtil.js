var ApiActions = require('../actions/ApiActions');

var ApiUtil = {
  fetchBenches: function() {
    $.ajax({
      url: 'api/benches',
      type: 'GET',
      dataType: 'json',
      success: function(benches) {
        ApiActions.receiveAll(benches);
      }
    });
  }
};

module.exports = ApiUtil;
