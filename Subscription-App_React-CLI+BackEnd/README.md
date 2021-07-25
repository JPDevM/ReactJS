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
- [ ] Seeders: Insert initial colors in db from Json.
- [ ] Seeders: Insert initial brands in db from Json.
- [ ] REST-API: Validate incoming data for Subscription method (edit, create, delete).
- [ ] REST-API: Validate incoming data for promotion method (edit, create, delete).
- [ ] REST-API: User methods.
- [ ] REST-API: Do the mockups.
- [ ] REST-API: Resolve the ActiveSubscription from a new method of controller. Ordered with dates, separate withd monthz
      Ej.: ActiveSubscription[CurrentMonth {}, NextMonth {}, ]


> Client
- [-] Component NavBar.
- [ ] Sass: variables.
- [ ] Sass: Media Queries Schema.  <meta name="color-scheme" content="dark light"> and use @media(prefers-color-scheme: dark) or @media(prefers-color-scheme: light)
- [ ] CSS Grid Layout in list.
- [ ] Update components with props.
- [ ] Get brands of his website. https://www.npmjs.com/package/parse-favicon
- [-] Setting Page.
- [-] Landig Page.
- [ ] Add custom Page.


### Author

Written by Devecchi Martinengo, Juan Pablo.

### License

MIT. See [LICENSE](server/LICENSE) for more details.

(Ends)