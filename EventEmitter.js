{
    let events = require('events');

    let Stream = new events.EventEmitter;

    Stream.on('read', function (obj) {
        console.log(obj + ' is on read')
    });

    Stream.emit('read', 'file1')
}
{
    let events = require('events');
    let util = require('util');

    function Stream() {
        events.EventEmitter.call(this)
    }

    util.inherits(Stream, events.EventEmitter);

    Stream.prototype.write = function (file) {
        this.emit("write", file);
    };

    var MyStream = new Stream();

    MyStream.on("write", function (file) {
        console.log(`${file} has been writed`);
    });
    MyStream.write("file2");
}



