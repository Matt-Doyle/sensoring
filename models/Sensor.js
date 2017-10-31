var bookshelf = require('../config/bookshelf');


// ES6 classes do not work well so we have to do it like this
// https://github.com/bookshelf/bookshelf/issues/756

var Sensor = bookshelf.Model.extend({
    tableName: 'sensors',
    name: '1B1',
    password: 'password',
    level: 1,
    room: "B1",

    datapoints: function() {
        return this.hasMany(Datapoint);
    }
})

var Datapoint = bookshelf.Model.extend({
    tableName: 'datapoints',
    timestamp: 0,
    temperature: 0,
    humidity: 0,
    lightLevel: 0,
    soundIntensity: 0,

    sensor: function() {
        return this.belongsTo(Sensor);
    }
})