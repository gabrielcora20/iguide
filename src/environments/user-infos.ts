import { BehaviorSubject } from 'rxjs';

export let userInfos = {
    "logado": false,
    "tipoUsuario": true,//true = guia
    "homeListener": new BehaviorSubject<any>(true),
    "usuarioAtivo": 1,
    "maiorIdGrupo": 1,
    "maiorIdGuia": 2,
    "maiorIdTurista": 2,
    "mensagens":[
        {
            "idUsuario": 1,
            "tipoUsuario": false,
            "usuario": "turista",
            "texto": "Olá"
        },
        {
            "idUsuario": 1,
            "tipoUsuario": true,
            "usuario": "guia",
            "texto": "Olá, tudo bem?"
        },
        {
            "idUsuario": 1,
            "tipoUsuario": false,
            "usuario": "turista",
            "texto": "Tudo, e com você?"
        },
        {
            "idUsuario": 1,
            "tipoUsuario": true,
            "usuario": "guia",
            "texto": "Tudo bem também"
        },
        {
            "idUsuario": 1,
            "tipoUsuario": false,
            "usuario": "turista",
            "texto": "Onde nos encontraremos"
        }
    ],
    "grupos": [
        {
            "id": 1,
            "guiaResponsavel": {
                "id": 1,
                "nome": "guia",
                "email": "guia@gmail.com",
                "telefone": "11111-1111"
            },
            "turistas": [
                {
                    "id": 1,
                    "nome": "turista",
                    "email": "turista@gmail.com",
                    "telefone": "11111-1111"
                }
            ],
            "nome": "Av paulista",
            "descricao": "tour na av paulista",
            "dataInicioTrajeto": "2020-12-12",
            "dataFimTrajeto": "2020-12-14",
            "horarioInicio": "13:50",
            "horarioFim": "14:50",
            "encerrado": false
        }
    ],
    "turistas": [
        {
            "id": 1,
            "nome": "turista",
            "email": "turista@gmail.com",
            "telefone": "11111-1111",
            "senha": "1234",
            "meuGrupo": {
                "id": 1,
                "guiaResponsavel": {
                    "id": 1,
                    "nome": "guia",
                    "email": "guia@gmail.com",
                    "telefone": "11111-1111"
                },
                "turistas": [
                    {
                        "id": 1,
                        "nome": "turista",
                        "email": "turista@gmail.com",
                        "telefone": "11111-1111"
                    }
                ],
                "nome": "Av paulista",
                "descricao": "tour na av paulista",
                "dataInicioTrajeto": "2020-12-12",
                "dataFimTrajeto": "2020-12-14",
                "horarioInicio": "13:50",
                "horarioFim": "14:50",
                "conviteAceito": false
            }
        },
        {
            "id": 2,
            "nome": "turista 2",
            "email": "turista2@gmail.com",
            "telefone": "11111-1111",
            "senha": "1234",
            "meuGrupo": null
        }
    ],
    "guias": [
        {
            "id": 1,
            "nome": "guia",
            "email": "guia@gmail.com",
            "telefone": "11111-1111",
            "senha": "1234"
        },
        {
            "id": 2,
            "nome": "guia 2",
            "email": "guia2@gmail.com",
            "telefone": "11111-1111",
            "senha": "1234"
        }
    ]    
}
// export let userInfos = {
//     logado: false,
//     tipoUsuario: false,
//     grupos: []
// }