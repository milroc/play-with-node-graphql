import Sequelize from 'sequelize';
import db from '../db';

const Person = db.define('person', {
  firstName: {type: Sequelize.STRING, allowNull: false,},
  lastName: {type: Sequelize.STRING, allowNull: false,},
  email: {type: Sequelize.STRING, allowNull: false, validate: {isEmail: true}},
});

export default Person;
