const sequelize = require('../Config/pg_config')
const {DataTypes} = require('sequelize');
const { Client } = require('./client_model');
const { Point_Sale } = require('./point_sale_model');
const { User } = require('./user_model');

const Shelf_Evidence = sequelize.define('Shelf_Evidence', {
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
    Point_Sale_ID: {
        type: DataTypes.UUID,
        references:{
            model: Point_Sale,
            key : "ID"
        }
    },
    User_ID: {
        type: DataTypes.UUID,
        references:{
            model: User,
            key : "ID"
        }
    },
    Geolocation:{
        type: DataTypes.STRING
    },
    Enable: {
        type: DataTypes.BOOLEAN
    }
})

try{
	Shelf_Evidence.sync({alter:true});
}catch(e){
	console.log(e)
}

module.exports = {
    Shelf_Evidence
}