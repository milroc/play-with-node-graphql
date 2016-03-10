import {GraphQLString, GraphQLNonNull} from 'graphql';

import db from '../db';
import PersonType from './PersonType';

export const addPerson = {
  type: PersonType,
  args: {
    firstName: { type: new GraphQLNonNull(GraphQLString), },
    lastName: { type: new GraphQLNonNull(GraphQLString), },
    email: { type: new GraphQLNonNull(GraphQLString), },
  },
  resolve(root, {firstName, lastName, email}) {
    return db.models.person.create({
      firstName,
      lastName,
      email: email.toLowerCase(),
    });
  },
};
