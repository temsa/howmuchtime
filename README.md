# Goal
Now how much time takes a callback to be called.

# Usage
Instead of passing a ```callback```, use ```howmuchtime(callback)``` to log how much time was taken to call the callback, e.g.:

```javascript
var howmuchtime = require('howmuchtime');
setTimeout(howmuchtime(function(){console.log('hello!')}),20);
```
will result in :
> The callback call was done in 29437 µs
> hello!

You can optionnaly pass a second argument which is a "timeHandler" function, which will be called before the callback, with 3 arguments:
* difference (in µs)
* start time (in µs)
* end time   (in µs)