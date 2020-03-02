var express = require('express');
var db = require('../config/sentDB');
var router = express.Router();

/* API Modules */
router.get('/', function(req, res) {
  //res.send('ws sentinel root')
  var dbc = db();
  dbc.exeq(req,res,'select top 100 * from AFSER10')
});

router.get('/servicio', function(req, res) {
    var dbc = db();
    dbc.exeq(req,res,'select top 100 * from AFSER10')
  });
  
  router.get('/servicio/:id', function(req, res) {
    var dbc = db();
    dbc.exeq(req,res,'select top 1 * from AFSER10 where afsercod='+req.params.id)
  });
module.exports = router;