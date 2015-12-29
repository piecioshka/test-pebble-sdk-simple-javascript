console.dir = function (o) {
    var start = false;

    for (var key in o) {
        if (o.hasOwnProperty(key)) {
            if (!start) {
                console.log('{');
                start = true;
            }
            console.log('  ' + key + ': ' + o[key]);
        }
    }

    if (start) {
        console.log('}');
    }
};
