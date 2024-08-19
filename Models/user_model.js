const sequelize = require('../Config/pg_config')
const {DataTypes} = require('sequelize');
const { Client } = require('./client_model');

const User = sequelize.define('User', {
    ID: {
       type: DataTypes.UUID,
       primaryKey: true
    },
    Username:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Pwd:{   
        type: DataTypes.STRING,
        allowNull: false
    },
    Client_ID: {
        type: DataTypes.UUID,
        references:{
            model: Client,
            key : "ID"
        }
    },
    Enable: {
        type: DataTypes.BOOLEAN
    }
})

try{
	User.sync({alter:true});
}catch(e){
	console.log(e)
}

module.exports = {
    User
}