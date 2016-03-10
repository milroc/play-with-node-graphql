import Sequelize from 'sequelize';
import db from '../db';

const Post = db.define('post', {
  title: {type: Sequelize.STRING, allowNull: false,},
  content: {type: Sequelize.STRING, allowNull: false,},
});

export default Post;
