const sequelize = require('../Config/pg_config')
const {DataTypes} = require('sequelize');
const { Client } = require('./client_model');

const Product = sequelize.define('Product', {
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
    },
    Client_ID: {
        type: DataTypes.UUID,
        references: {
            model: Client,
            key: "ID",
        },
    },
})

try{
	Product.sync({alter:true});
}catch(e){
	console.log(e)
}

module.exports = {
    Product
}