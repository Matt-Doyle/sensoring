var reltime = require("reltime");

function parseDate(dateStr) {
    if (dateStr[0].toLowerCase() == "r") {
        return reltime.parse(new Date(), dateStr.substring(1));
    } else {
        return new Date(dateStr);
    }
}

// Parameters:
//   rooms: list of room names, seperated by commas
//   metrics: selection of temp,humidity,sound,light seperated by commas
//   from: time to start yielding results.
//   to: (optional) time to return results up until
// Return format:
//   Returns a dictionary containing an entry for each room.
//   Each room contains a list of dictionaries, where the dictionarys contain
//     the a timestamp, and a dictionary of metrics.
exports.doQueryGet = function(req, res) {
    var query = req.query;

    var rooms = query.rooms.split(",");
    var metrics = query.metrics.split(",");
    var from = parseDate(query.from);
    var to = parseDate(query.to) || new Date();

    console.log(query.from, query.to);
    console.log(rooms, metrics, from, to);
    console.log(from < to);

    var result = {};
    for (var room of rooms) {
        result[room] = [];
        var timeIter = from;
        while (timeIter < to) {
            var roomMetrics = {}
            for (var metric of metrics) {
                roomMetrics[metric] = Math.round(Math.random() * 50 - 25);
            }
            result[room].push({
                 "timestamp": from,
                 "metrics": roomMetrics
            });
            timeIter = reltime.parse(timeIter, "10m");
        }
    }

    console.log(result);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(result));
}

// Parameters:
//   rooms: list of room names, seperated by commas
//   metrics: selection of temp,humidity,sound,light seperated by commas
// Return format:
//   Returns a dictionary containing an entry for each room.
//   Each room's entry contains a dictionary containing the metrics names as keys and metric values as values.
exports.doRealtimeGet = function(req, res) {
    var query = req.query;

    var rooms = query.rooms.split(",");
    var metrics = query.metrics.split(",");

    var result = {};

    for (var room of rooms) {
        var roomMetrics = {}
        for (var metric of metrics) {
            roomMetrics[metric] = Math.round(Math.random() * 50 - 25);
        }
        result[room] = roomMetrics;
    }

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(result));
}