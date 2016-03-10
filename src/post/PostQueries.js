import {GraphQLList} from 'graphql';

import db from '../db';
import PostType from './PostType';

export const getPost = {
  type: PostType,
  resolve: (obj) => obj.getPost(),
};

export const getPosts = { 
  type: new GraphQLList(PostType),
  resolve: (obj) => obj.getPosts(),
};

export const posts = {
  type: new GraphQLList(PostType),
  args: {},
  resolve: (root, where) => db.models.post.findAll({where}),
};
