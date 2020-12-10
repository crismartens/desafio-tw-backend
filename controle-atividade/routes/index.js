var express = require('express');
var cors = require('cors')
var router = express.Router();
var atividades = require('../atividades.js');
router.use(cors());

var atividadesList = atividades.atividadesList;
var id = String(atividadesList.length);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Controle de Atividade' });
});

/* GET Tipos List */
router.get('/tipos/', function(req, res, next) {
  return res.status(200).json(atividades.tiposList);
});

/* GET Atividades List */
router.get('/atividades/', function(req, res, next) {
  return res.status(200).json(atividadesList);
});

/* POST Atividades List */
router.post('/atividades/', function(req, res, next) {
  id = String(Number(id) + 1);
  var novaAtividade = req.body;
  novaAtividade.id = id;
  atividadesList.push(novaAtividade);
  return res.status(200).json(novaAtividade);
});

/* UPDATE Atividades List */
router.put('/atividades/:id', function(req, res, next) {
  console.log(req.params.id)
  console.log(req.body)
  var updated = {};
  atividadesList.forEach(function (value, index, array) {
    if (value.id === req.params.id) {
      atividadesList[index] = req.body;
      updated = atividadesList[index];
    }
  });
  console.log(atividadesList);
  return res.status(200).json(updated);
});

/* DELETE Atividades List */
router.delete('/atividades/:id', function(req, res, next) {
  var deleted = {};
  atividadesList = atividadesList.filter(function (atividade){
    if (atividade.id === req.params.id) {
      deleted = atividade;
      return false;
    }
    return true;
  });
  return res.status(200).json(atividadesList);
});

module.exports = router;
