# M3projetofinal

Este é o projeto final do Módulo 03 - Backend da Blue EdTech.
O projeto é um cardápio de restaurante dividido em 5 rotas.
Cada rota é uma sessão do cardápio:
-Entradas (/entradas)
-Bebidas (/bebidas)
-Pratos principais (/pratosPrincipais)
-Acompanhamentos (/acompanhamentos)
-Sobremesas (/sobremesas)

Os itens de cada rota estão armazenados em arquivo JSON seguindo o seguinte padrão:
{
"nome":"<string>",
"valor":"<number>"
}

Cada rota possue 5 subrotas para realizar as seguintes operações:
- /add - POST (para adicionar um novo item na lista)
- /update/<id> - PUT (para atualizar itens por id, a id do item desejado deve ser inserido na rota)
- /listall - GET (para ver a lista completa)
- /listid/<id> - GET (para ver itens da lista por id, a id do item desejado deve ser inserido na rota)
- /delete/<id> - DELETE (para deletar itens por id, a id do item desejado deve ser inserido na rota)

O projeto foi feito por Felipe Wrany e Mozert Meireles.