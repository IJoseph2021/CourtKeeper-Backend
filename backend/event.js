var sql = require('./sqlfile.js');

//get event name
exports.getEventName = function (req,res){
    sql.query("SELECT EVENTS.event_name FROM EVENTS WHERE EVENTS.event_id = \'" + req.params.event_id + "\';",
    function(err,rows,field){
        if(err || rows.length == 0){
            res.send("<p1> No matching event name of this event id")
        }
        res.send(rows[0]);
    });
}

//get event time
exports.getEventTime = function (req,res){
    sql.query("SELECT EVENTS.time FROM EVENTS WHERE EVENTS.event_id = \'" + req.params.event_id + "\';",
    function(err,rows,fields){
        if(err || rows.length == 0){
            //logger.error(err.message);
            res.send("<p1> No matching email address for that event id");
        }
        res.send(rows[0]);
    });
}

exports.getEvent = function(req,res){
    sql.query("SELECT * FROM EVENTS WHERE EVENTS.event_id = \'"+ req.params.event_id + '\';',
    function(err,rows,fields){
        if(err || rows.length == 0){
            res.send("<p1> No mathching event for this event id");
        }

    });
}