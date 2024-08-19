const sequelize = require('../Config/pg_config')
const {DataTypes} = require('sequelize');

const { Shelf_Evidence } = require('./shelf_evidence_model');

const Shelf_Evidence_Media = sequelize.define('Shelf_Evidence_Media', {
    ID: {
       type: DataTypes.UUID,
       primaryKey: true
    },
    Shelf_Evidence_ID: {
        type: DataTypes.UUID,
        references:{
            model: Shelf_Evidence,
            key : "ID"
        }
    },
    Photo: {
        type: DataTypes.TEXT
    }
})

try{
	Shelf_Evidence_Media.sync({alter:true});
}catch(e){
	console.log(e)
}

module.exports = {
    Shelf_Evidence_Media
}