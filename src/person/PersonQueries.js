import {GraphQLInt, GraphQLList, GraphQLString} from 'graphql';

import db from '../db';
import PersonType from './PersonType';

const PEOPLE_ARGS = {
  id: { type: GraphQLInt },
  email: { type: GraphQLString },
};

// Root queries
export const people = {
  type: new GraphQLList(PersonType),
  args: PEOPLE_ARGS,
  resolve: (obj, where) => db.models.person.findAll({where}),
};

// Relational Queries
export const getPerson = {
  type: PersonType,
  resolve: (obj) => obj.getPerson(),
};

export const getPersons = {
  type: new GraphQLList(PersonType),
  args: PEOPLE_ARGS,
  resolve: (obj, where) => obj.getPersons({where}),
};
