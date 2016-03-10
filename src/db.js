import Sequelize from 'sequelize';

export default new Sequelize(
  'relay',
  'postgres',
  'postgres',
  {
    dialect: 'postgres',
    host: 'localhost',
  },
);
