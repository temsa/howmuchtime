var microtime = require('microtime');

/**
 * Default handler for using call time, takes 3 arguments:
 * - difference (in µs)
 * - start time (in µs)
 * - end time   (in µs)
 **/
function logTime (difference, startTime, finalTime) {
  console.log("The callback call was done in", difference, "µs");
}

module.exports = function howmuchtime(callback, timeHandler) {
  var startTime = microtime.now();
  timeHandler = timeHandler || logTime;
  
  return function callbackWrapper () {
    var finalTime = microtime.now();
    timeHandler(finalTime - startTime, startTime, finalTime);
    
    callback.apply(this, arguments);
  };
}