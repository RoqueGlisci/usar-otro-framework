require("dotenv").config();
require('./persistence/store/firebase/connection');
const Koa = require('koa');
const mount = require('koa-mount');
const { graphqlHTTP } = require('koa-graphql');
const productGraphqlController = require('./controllers/productGraphqlController.js');

const PORT = 8078;
const app = new Koa();

app.use(
    mount(
        '/graphql',
        graphqlHTTP({
            schema: productGraphqlController.schema,
            rootValue: productGraphqlController.rootValue,
            graphiql: true,
        }),
    ),
);

app.listen(PORT, () => console.log(`Server corriendo en el puerto: ${PORT}`));