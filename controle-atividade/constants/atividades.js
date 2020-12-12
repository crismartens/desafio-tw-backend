module.exports = {
    atividadesList : [
        {
            id: '1',
            nome: 'Exemplo 1',
            data: new Date().toLocaleString().substr(0, 10),
            tipo: 'Desenvolvimento',
            prioridade: 'Normal',
            descricao: 'Esta atividade é um exemplo.'
        }
    ],
    atividadesFields : [
        'data',
        'tipo',
        'prioridade',
        'nome',
        'descricao'
    ]
};