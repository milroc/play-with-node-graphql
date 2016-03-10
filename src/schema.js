import {GraphQLObjectType, GraphQLSchema} from 'graphql';

// These imports are explicit as some of these queries may apply to objects.
// TODO (milroc): separate these out into different modules.
import {people} from './person/PersonQueries';
import {posts} from './post/PostQueries';

import {addPerson} from './person/PersonMutations';

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is the root of our app',
  fields: () => ({ people, posts, }),
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Functions to create stuff',
  fields: () => ({ addPerson, }),
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});

export default Schema;
