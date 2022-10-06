var eventos = [
    {id: 1, nome: "GitHub Presente! Brasil! Outubro", descricao: "GitHub Presente Brasil! é um Meet-up mensal da GitHub para a comunidade brasileira."},
    {id: 2, nome: "Flutter Brasil 2022", descricao: "O evento tem como objetivo de mostrar o atual estado da comunidade brasileira de Flutter."},
    {id: 3, nome: "KMM - Kanban Maturity Model", descricao: "Olá Pessoal, tudo bem com vocês? Que tal se tormar um Kanban Coach? Participe de nossa Turma do Kanban Maturity Model (KMM)"}
]

function selectAll(res) {
    res.json(eventos);
}

function selectWhereId(param, res){
    
    if (param > 0 && eventos.length >= param){
        res.json(eventos[param - 1])
        return true
    } else {
        res.status(400)
        res.json({message: "evento não encontrado"})
        console.error("Bad Request")
        return false
    }
}

function deleteWhereId(param, res){
    if (param > 0 && eventos.length >= param){
        eventos.pop(param - 1)
        res.status(204);
        res.json()
        return true
    } else {
        res.status(400);
        res.json({message: "evento não encontrado"})
        console.error("Bad Request")
        return false
    }
}

function insert(evento, res){
    evento.id = eventos.length + 1
    eventos.push(evento)
    res.status(201)
    res.json({id_gerado: evento.id})
}

function updateWhereId(res, evento, id){
    if (validaID(id)) {
        evento.id = id
        eventos[id - 1] = evento
        res.status(200)
        res.json({message: "atualizado com sucesso"})
        return true
    }
    else {
        res.status(400)
        res.json({message: "evento não encontrado"})
        return false
    }
}

function validaID(id) {
   return eventos[id - 1];
}

module.exports = { selectAll, selectWhereId, deleteWhereId, insert, updateWhereId};