import { Sequelize } from "sequelize"
const sequelize = new Sequelize('POS', 'postgres', 'database1', {
    host: 'localhost',
    port:5432,
    logging:false,
    dialect: "postgres"
})

const ConnectDB=async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
export  default sequelize;
export {ConnectDB}