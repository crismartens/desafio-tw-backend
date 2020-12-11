const atividadesConst = require('../constants/atividades.js');

let atividadesList = atividadesConst.atividadesList;
let lastId = String(atividadesList.length);

var atividadesServ = {

    getAtividades: function (cb) {
        cb(null, atividadesList);
    },

    postAtividades: function (atividade, cb) {

        lastId = String(Number(lastId) + 1);
        let newAtividade = atividade;
        newAtividade.id = lastId;

        atividadesList.push(newAtividade);

        cb(null, newAtividade);

    },

    putAtividades: function (id, atividade, cb) {

        let updated = {};
        atividadesList.forEach(function (value, index) {
            if (value.id === id) {
                atividadesList[index] = atividade;
                updated = atividadesList[index];
            }
        });

        cb(null, updated);

    },

    deleteAtividades: function (id, cb) {

        let deleted = {};
        atividadesList = atividadesList.filter(function (atividade){
            if (atividade.id === id) {
                deleted = atividade;
                return false;
            }
            return true;
        });

        cb(null, deleted);

    }

}

module.exports = atividadesServ;