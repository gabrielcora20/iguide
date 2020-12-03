export let userInfos = {
    "logado": true,
    "tipoUsuario": true,//true = guia
    "usuarioAtivo": 1,
    "maiorIdGrupo": 1,
    "maiorIdGuia": 1,
    "maiorIdTurista": 1,
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
            "dataTrajeto": "2020-12-12",
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
                "dataTrajeto": "2020-12-12",
                "horarioInicio": "13:50",
                "horarioFim": "14:50",
                "conviteAceito": false
            }
        }
    ],
    "guias": [
        {
            "id": 1,
            "nome": "guia",
            "email": "guia@gmail.com",
            "telefone": "11111-1111"
        }
    ]    
}
// export let userInfos = {
//     logado: false,
//     tipoUsuario: false,
//     grupos: []
// }