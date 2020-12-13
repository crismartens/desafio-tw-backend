const atividadesConst = require('../constants/atividades.js');
const tiposConst = require('../constants/tipos.js');
const prioridadesConst = require('../constants/prioridades.js');

let atividadesList = atividadesConst.atividadesList;
let lastId = String(atividadesList.length);

var atividadesServ = {

    getAtividades: function (cb) {
        cb(null, atividadesList);
    },

    postAtividades: function (atividade, cb) {

        if (!atividadesServ.validateAtividade(atividade, 'post')) {
            return cb(400)
        }

        lastId = String(Number(lastId) + 1);
        let newAtividade = atividade;
        newAtividade.id = lastId;
        newAtividade.data = newAtividade.data.substr(0, 10)

        atividadesList.push(newAtividade);

        cb(null, newAtividade);

    },

    putAtividades: function (id, atividade, cb) {

        if (!atividadesServ.validateAtividade(atividade, 'put')) {
            return cb(400)
        }

        let updated = atividade;
        atividadesList.forEach(function (value, index) {
            if (value.id === id) {
                updated.id = atividadesList[index].id;
                updated.data = atividadesList[index].data;
                atividadesList[index] = updated;
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

    },

    validateAtividade: function (atividade, acao) {

        if (!atividade.nome || !atividade.tipo || !atividade.prioridade || !atividade.data) {
            return false;
        }

        if (!tiposConst.tiposList.includes(atividade.tipo)) {
            return false;
        }

        if (!prioridadesConst.prioridadesList.includes(atividade.prioridade)) {
            return false;
        }
        
        if (new Date(atividade.data) == 'Invalid Date' || !/(\d{4})-(\d{2})-(\d{2})/g.test(atividade.data)){
            return false;
        }

        if (atividade.tipo === 'Desenvolvimento' && atividade.prioridade === "Urgente") {
            return false;
        }

        if (atividade.nome.length > 20 || (atividade.descricao && atividade.descricao.length > 120)) {
            return false;
        }

        if (acao === 'post' &&
            ((atividade.data).substr(0, 10) < new Date().toLocaleString().substr(0, 10))) {
            return false;
        }

        return true;

    }

}

module.exports = atividadesServ;