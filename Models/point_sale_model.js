const sequelize = require('../Config/pg_config')
const {DataTypes} = require('sequelize');
const { Client } = require('./client_model');

const Point_Sale = sequelize.define('Point_Sale', {
    ID: {
        type: DataTypes.UUID,
        primaryKey: true
       
    },
    Client_ID: {
        type: DataTypes.UUID,
        references:{
            model: Client,
            key : "ID"
        }
    },
    Name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Enable: {
        type: DataTypes.BOOLEAN
    }
})//

try{
	Point_Sale.sync({alter:true});
}catch(e){
	console.log(e)
}

module.exports = {
    Point_Sale
}