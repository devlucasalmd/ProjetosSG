const {Sequelize} = require('sequelize')
// o caminho do storage é a partir do index.js não do arquivo atual
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: './database/database.sqlite'
})

module.exports= sequelize