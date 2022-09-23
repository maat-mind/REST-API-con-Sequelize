import Sequelize from 'sequelize'

export const sequelize = new Sequelize('project', 'postgres', 'helloworld', {
  host: 'localhost',
  dialect: 'postgres',
})
