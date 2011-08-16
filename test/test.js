var vows = require("vows"),
    assert = require("assert"),
    howmuchtime = require("../lib/howmuchtime");

var time={};

vows.describe('howmuchtime').addBatch({
  'Using howmuchtime on an asynchronous callback': {
    topic: function () {
      var cb = this.callback;
      
      setTimeout(howmuchtime(cb, function handleTime(diff, start, end) {
        time.diff  = diff,
        time.start = start,
        time.end   = end}),20);
    },
    'we get no error': function (err) {
        assert.isUndefined (err);
    },
    'time handler has been called': function () {
        assert.isObject (time);
    },
    'the time is realistic': function () {
        assert.isTrue (time.diff < 20 *2 *1000);
    }
  }
}).export(module, { error: false });