var response = require('./response');

function dbconnect() {
    console.log('DINERO')
    //export this function and imported by server.js
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'sa',
        password: 'Sentinel2010',
        server: 'SNTNL-SVR-PRI',
        database: 'AFPrivado2',
        options: {
            instanceName: 'MSSQLSERVER',
            enableArithAbort: true,
        }
    };

    function exequery(req, res, query){
        console.log('TUMBS')
        // connect to your database
        sql.connect(config, function (err) {
            if (err){
                console.log("Error while connecting database :- " + err);
                res.send(err);
            }
            else{
                // create Request object
                var request = new sql.Request();

                // query to the database and get the records
                request.query(query, function (err, recordset) {
                    console.log('EXECTUE')
                    if (err){
                        console.log("Error while querying database :- " + err);
                        res.send(err);                    
                    }
                    else{
                        // send records as a response
                        console.log('CONECTADO A SENTINEL')
                        res.send(recordset);
                        //return res.json(response(recordset, err));
                    }
                });
            }
        });
    }
    return {
        exeq:exequery
    }
}

module.exports = dbconnect;