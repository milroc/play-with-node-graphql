import Express from 'express';
import ExpressGraphQL from 'express-graphql';

import init from './init';
import Schema from './schema';

const APP_PORT = 3001;

const app = Express();

app.use('/graphql', ExpressGraphQL({
  schema: Schema,
  pretty: true,
  graphiql: true,
}));

app.listen(APP_PORT, () => {
  console.log('App listening on ', APP_PORT);
})
