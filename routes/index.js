var express = require('express');
var cors = require('cors')
var router = express.Router();
router.use(cors());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Controle de Atividade' });
});

module.exports = router;
