const tiposConst = require('../constants/tipos.js');

var tiposServ = {

    getTipos: function (cb) {
        cb(null, tiposConst);
    },

}

module.exports = tiposServ;