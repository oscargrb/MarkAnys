const sequelize = require('../Config/pg_config')
const {DataTypes} = require('sequelize')

const Client = sequelize.define('Client', {
    ID: {
       type: DataTypes.UUID,
       primaryKey: true
       
    },
    Name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Enable: {
        type: DataTypes.BOOLEAN
    }
})

try{
	Client.sync({alter:true});
}catch(e){
	console.log(e)
}

module.exports = {
    Client
}