import {GraphQLInt, GraphQLObjectType, GraphQLString} from 'graphql';

import {getPosts} from '../post/PostQueries';

const PersonType = new GraphQLObjectType({
  name: 'Person',
  description: 'This is a person',
  fields: () => {
    return {
      id: { type: GraphQLInt, resolve: ({id}) => id, },
      firstName: { type: GraphQLString, resolve: ({firstName}) => firstName, },
      lastName: { type: GraphQLString, resolve: ({lastName}) => lastName, },
      email: { type: GraphQLString, resolve: ({email}) => email, },
      posts: getPosts,
    };
  },
});

export default PersonType;
