<p align="center">
  <a href="https://www.grupojacto.com.br/" target="blank"><img src="https://yt3.googleusercontent.com/A1ZKD7DaizCjDtbJ83-f9c0A9rcokgR0GOlMhg9LK5vljUc4X2qEGO19m9D90tz3sIAbFuQIaQ=s900-c-k-c0x00ffffff-no-rj" width="250" alt="Grupo Jacto Logo" /></a>
</p>

# Estágio: Case - Grupo Jacto

Esta aplicação foi desenvolvida como parte do processo seletivo do Grupo Jacto, ela consiste em uma API simples cujo propósito é criar, listar, editar e remover carros de um banco de dados.

## **Tecnologias e bibliotecas**:
* Node
* Express
* TypeScript
* dotenv
* pg
* typeorm
* zod
* tsnd

###

Para inciar este projeto, é necessário instalar as dependências, que serão utilizadas nos testes. Portanto utilize o comando abaixo para instalar tais dependências:

```bash
# caso use npm
npm run i

# caso use yarn
yarn
```

## Instalação

Apenas as bibliotecas de teste, ou que os testes dependem, estão no **package.json**. Por isso, instale as dependências do projeto manualmente e não se esqueça de inicia-lo também.

```bash
# caso use npm
npm init -y

# caso use yarn
yarn init -y
```

## Conectar ao banco de dados

Instalada as dependências, crie e se conecte a um banco de dados através do env.

```.env
DATABASE_URL=postgres://<username>:<password>@<host>:<port>/<database>
SECRET_KEY=VERYSECRETKEY
```

Enfim rode as migrações.

```bash
yarn typeorm migration:run -d src/data-source.ts
```

## Rodar o servidor

Feita a conexão com o banco de dados, inicie o servidor utilizando o comando abaixo.

```bash
# caso use npm
npm run dev

# caso use yarn
yarn dev
```

<p align="center">Obrigado pela atenção! <a href="https://owl-tau.vercel.app/" target="blank">Mais dos meus projetos</a></p> 
