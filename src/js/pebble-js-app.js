var _ = require('./node_modules/underscore/underscore');
// console.dir = require('/src/js/console.dir');

Pebble.addEventListener("ready", function (e) {
    console.log('[Event] Pebble#ready');

    console.log(typeof console.dir);
});
