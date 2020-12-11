const express = require('express');
const cors = require('cors')
const router = express.Router();
const atividadesServ = require('../services/atividades.js');

router.use(cors());

/* GET Atividades */
router.get('/', function(req, res, next) {
  atividadesServ.getAtividades(function (err, result){
    return res.status(200).json(result);
  });
});

/* POST Atividades */
router.post('/', function(req, res, next) {
  atividadesServ.postAtividades(req.body, function (err, result){
    return res.status(200).json(result);
  });
});

/* UPDATE Atividades */
router.put('/:id', function(req, res, next) {
  atividadesServ.putAtividades(req.params.id, req.body, function (err, result){
    return res.status(200).json(result);
  });
});

/* DELETE Atividades */
router.delete('/:id', function(req, res, next) {
  atividadesServ.deleteAtividades(req.params.id, function (err, result){
    return res.status(200).json(result);
  });
});

module.exports = router;
