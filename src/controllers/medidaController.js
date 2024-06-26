var medidaModel = require("../models/medidaModel");

function buscarManutencao(req, res) {
    var fkAcademia = req.body.fkAcademiaServer;


    medidaModel.buscarManutencao(fkAcademia).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarPico(req, res) {
    var equip = req.body.equipServer;
    var dataPico = req.body.dataAtualServer;
    var fkAcademia = req.body.fkAcademiaServer;

    medidaModel.buscarPico(equip, dataPico, fkAcademia).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMaisUsados(req, res) {
    var fkAcademia = req.body.fkAcademiaServer;


    medidaModel.buscarMaisUsados(fkAcademia).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarData(req, res) {
    var fkAcademia = req.body.fkAcademiaServer;

    if (fkAcademia == undefined) {
        console.log('Usuario undefined')
    } else {

        medidaModel.listarData(fkAcademia).then((resultado) => {
            res.status(200).json(resultado);
        });
    }

}

function listarEquip(req, res) {
    var fkAcademia = req.body.fkAcademiaServer;

    if (fkAcademia == undefined) {
        console.log('Usuario undefined')
    } else {

        medidaModel.listarEquip(fkAcademia).then((resultado) => {
            res.status(200).json(resultado);
        });
    }
}

async function quantidadeAparelhosSub(req, res) {
    var fkAcademia = req.body.fkAcademiaServer;
    if (fkAcademia == undefined) {
        console.log('Usuario undefined')
    } else {
        medidaModel.quantidadeAparelhosSub(fkAcademia).then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }
    
}

function quantidadeAparelhosMais(req,res) {
    var fkAcademia = req.body.fkAcademiaServer;
    
    if (fkAcademia == undefined) {
        console.log('Usuario undefined')
    } else {
        medidaModel.quantidadeAparelhosMais(fkAcademia).then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }
    
}


function kpisMaisUsados(req, res){
    var fkAcademia = req.body.fkAcademiaServer;

    medidaModel.kpisMaisUsados(fkAcademia).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function kpisMenosUsados(req, res){
    var fkAcademia = req.body.fkAcademiaServer;

    medidaModel.kpisMenosUsados(fkAcademia).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function nomeAcademia(req, res) {
    const idAcademia = req.body.idAcademia;
    
    if (idAcademia == undefined) {
        console.log('idAcademia undefined');
        res.status(400).send("idAcademia is undefined");
    } else {
        medidaModel.nomeAcademia(idAcademia).then((resultado) => {
            res.status(200).json(resultado);
        }).catch((erro) => {
            console.log(erro);
            res.status(500).json({ erro: erro });
        });
    }
}

module.exports = {
    buscarManutencao,
    buscarPico,
    buscarMaisUsados,
    listarData,
    listarEquip,
    quantidadeAparelhosSub,
    quantidadeAparelhosMais,
    kpisMaisUsados,
    kpisMenosUsados,
    nomeAcademia
}