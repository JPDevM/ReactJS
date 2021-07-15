# Subscription App

> Use this app for manage yours subscriptions payments.

### 🚀 Quick Start

In server folder, create a `.env` file and copy the content from `.env.example`.

#### Things for the server

Install node dependences.

```shell
$ cd server
$ npm i
```

Turn on the server.

```shell
$ cd src
$ npm start
```

Create database.

```shell
$ npm run dbStart
```

Install React dependences.

```shell
$ cd ../../client
$ npm i
```

### Tecnologies

##### Main language:

> JavaScript

![javascript_logo](../Images_docs/javascript_logo.png)

##### BackEnd:

> - Node.JS, Express.JS, MySQL, Sequelize.JS

![Node logo](../Images_docs/node_logo.png)

![Express logo](../Images_docs/express_logo.png)

![MySQL logo](../Images_docs/mysql_logo.png)

![Sequelize logo](../Images_docs/sequelize_logo.png)

##### FrontEnd:

> React.JS

![React logo](../Images_docs/react_logo.png)

##### DevOps:

- Gitflow Workflow: [GitFlow-English](./GitFlow-English.md), [GitFlow-English](./GitFlow-English.md)

  ![Flujo de trabajo de Git flow](../Images_docs/Flujo-de-trabajo-de-Git-flow.png)

#### Database.

> Database schema `subs_db`. Image generator: [diagram.io](https://dbdiagram.io)

![db_schema](../Images_docs/db_schema.png)

#### Desing.
> FAVICON this icon was only an inspiration. 

![favicon](../Images_docs/favico.png)

### TO-DOs
> Server
- [x] Create Sass script.
- [x] Install React.
- [x] Create a Bitbuket Readme for the workflow.
- [x] Implemen git flow.
- [x] REST-API: Subscription methods.
- [x] REST-API: Promotions methods.
- [ ] Seeders: Insert initial colors in db from Json.
- [ ] Seeders: Insert initial brands in db from Json.
- [ ] REST-API: Use the colors, create relations between tables.
- [ ] REST-API: Validate incoming data for Subscription method (edit, create, delete).
- [ ] REST-API: Validate incoming data for promotion method (edit, create, delete).
- [ ] REST-API: User methods.
- [ ] REST-API: Do the mockups.

> Client
- [x] Install React.JS
- [x] Clear react.
- [x] Install Dependencies.
- [x] Ceate a folder structure.
- [x] Get main data from db using hooks.
- [x] Create main components using arrow funtions.
- [ ] Get brands of his website. https://www.npmjs.com/package/parse-favicon
- [ ] Update components with props.
- [x] Create a loading componets.
- [x] Implement Sass.
- [ ] Sass: variables.
- [ ] Sass: Media Queries Schema


### Author

Written by Devecchi Martinengo, Juan Pablo.

### License

MIT. See [LICENSE](server/LICENSE) for more details.

(Ends)