# To Do List React
Esse projeto tem como principal função gerenciar um banco de dados de um aplicação de lista de tarefas.
A aplicação permite adicionar, editar, remover e visualizar anotações feitas previamente pelo próprio usuário.

## Como executar a aplicação ?
Para usar o projeto é necessário previamente ter o mongoDB sendo executado no seu localhost na porta padrão (27017).
Com o mongoDB devidamente operante é necessário realizar o comando "npm install" nos diretórios "client-side" e "server-side", e após isso realizar o comando "npm start" em cada um dos diretórios.

## Acessando a aplicação
Após os 2 servidores estarem executando na sua máquina é necessário abrir o browser e entrar na porta 3000 do localhost. Veja que dessa forma não é possível acessar o banco de dados por outros dispositivos fora o que está hospedando o servidor. Para resolver esse problema é possível mudar a requisição 'fetch' da aplicação (Front-end/Client-side) para receber dados de um endereço específico (nesse caso você utiliza o ipv4 da máquina que está hospedando o servidor Back-end/Server-side).