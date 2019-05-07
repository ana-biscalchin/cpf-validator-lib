# Validador de CPF

  

**Esta biblioteca se destina à validação de números de Cadastro de Pessoa Física (CPF).**

Na versão atual é capaz de verificar se os dois últimos dígitos são válidos, de acordo com as normas matemáticas da Receita Federal do Brasil; 

  
## Como instalar:

  

```shell

  

$ npm install cpf-validator-lib-ab

  

```

  

## Como utilizar:

  

```node

> const  validator = require("cpf-validator-lib-ab");

> console.log(validator.cpfValidator("25509631058")) // returns true

  

```

  

## roadmap oficial do projeto

  

#### versão 2.0.0 (sem previsão, aceita-se contribuições)

- README translated to english;

#### versão 1.0.0 (released)

- funcionalidades:

	-  Verifica se os dois últimos dígitos são válidos
