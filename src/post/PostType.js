import {GraphQLInt, GraphQLObjectType, GraphQLString} from 'graphql';

import {getPerson} from '../person/PersonQueries';

const PostType = new GraphQLObjectType({
  name: 'Post',
  description: 'This is a Post',
  fields: () => {
    return {
      id: { type: GraphQLInt, resolve: ({id}) => id, },
      title: { type: GraphQLString, resolve: ({title}) => title, },
      content: { type: GraphQLString, resolve: ({content}) => content, },
      person: getPerson,
    };
  },
});

export default PostType;
