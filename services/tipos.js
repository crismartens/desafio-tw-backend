const tiposConst = require('../constants/tipos.js');

var tiposServ = {

    getTipos: function (cb) {
        cb(null, tiposConst.tiposList);
    },

}

module.exports = tiposServ;