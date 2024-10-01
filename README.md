
# Teste Bradesco

## Descrição
Este projeto é uma aplicação web desenvolvida em Angular, integrada a um backend simulado que roda na porta 3200 usando o JSON Server. A aplicação foi criada como parte do processo de avaliação para o Bradesco.

## Tecnologias Utilizadas
- Angular
- JSON Server (para o backend mockado)

## Configuração do Backend
Para rodar o backend com dados mockados, siga os passos abaixo:

1. **Instale o JSON Server** (caso ainda não tenha):
   ```bash
   npm install -g json-server
2. **Inicie o JSON Server** 
   ```json-server --watch db.json --port 3200
   
## Servidor de Desenvolvimento

Execute `ng serve` para iniciar um servidor de desenvolvimento. Navegue até `http://localhost:4200/`. A aplicação será recarregada automaticamente se você alterar algum dos arquivos de origem.

## Estrutura de Código

Execute `ng generate component nome-do-componente` para gerar um novo componente. Você também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Compilação

Execute `ng build` para compilar o projeto. Os artefatos da compilação serão armazenados no diretório `dist/`.

## Executando Testes Unitários

Execute `ng test` para executar os testes unitários via [Karma](https://karma-runner.github.io).


