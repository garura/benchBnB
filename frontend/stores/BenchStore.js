var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var BenchConstants = require('../constants/BenchConstants');

var _benches = [];

var BenchStore = new Store(AppDispatcher);

BenchStore.all = function() {
  return _benches.slice(0);
};

function resetBenches(benches) {
  _benches = benches;
}

BenchStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      resetBenches(payload.benches);
      BenchStore.__emitChange();
      break;
  }
};

module.exports = BenchStore;
