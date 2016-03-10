import Person from '../person/PersonDB.js';
import Post from './PostDB.js';

Post.belongsTo(Person);
