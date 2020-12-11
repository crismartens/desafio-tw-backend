const express = require('express');
const cors = require('cors')
const router = express.Router();
const tiposServ = require('../services/tipos.js');

router.use(cors());

/* GET Tipos List */
router.get('/', function(req, res, next) {
  tiposServ.getTipos(function (err, result){
    return res.status(200).json(result);
  });
});

module.exports = router;
