// only crud methods
const { v4 } = require('uuid');

const { Shelf_Evidence } = require('../Models/shelf_evidence_model');
const { Shelf_Evidence_Media } = require('../Models/shelf_evidence_media_model');
const { HasMany, HasOne, BelongsTo } = require('sequelize');
const { Client } = require('../Models/client_model');
const { Point_Sale } = require('../Models/point_sale_model');
const { User } = require('../Models/user_model');

// find
const findShelfEvidenceByClient = (client_id) =>{
    return new Promise(async (resolve, reject)=>{
        try{
            const result = await Shelf_Evidence.findAll({
                where: {
                    Client_ID: client_id
                },
                limit: 10,
                order: [
                    ['createdAt', 'ASC']
                ],
                attributes:[
                    'ID',
                    'Geolocation',
                    'createdAt'
                ],
                include: [
                    {
                        model: Client,
                        association: new BelongsTo(Shelf_Evidence, Client, {foreignKey: "Client_ID"}),
                        attributes:[
                            'ID',
                            'Name'
                        ]
                    },
                    {
                        model: Point_Sale,
                        association: new BelongsTo(Shelf_Evidence, Point_Sale, {foreignKey: "Point_Sale_ID"}),
                        attributes:[
                            'ID',
                            'Name'
                        ]
                    },
                    {
                        model: User,
                        association: new BelongsTo(Shelf_Evidence, User, {foreignKey: "User_ID"}),
                        attributes:[
                            'ID',
                            'Username'
                        ]
                    }
                ]
            })
            resolve(result)
        }catch(e){
            console.log(e)
            reject(e)
        }
    })
}
const findShelfEvidenceByPointSale = (point_sale_id) =>{
    return new Promise(async (resolve, reject)=>{
        try{
            const result = await Shelf_Evidence.findAll({
                where: {
                    Point_Sale_ID: point_sale_id
                },
                attributes:[
                    'ID',
                    'Geolocation',
                    'createdAt'
                ],
                include: [
                    {
                        model: Client,
                        association: new BelongsTo(Shelf_Evidence, Client, {foreignKey: "Client_ID"}),
                        attributes:[
                            'ID',
                            'Name'
                        ]
                    },
                    {
                        model: Point_Sale,
                        association: new BelongsTo(Shelf_Evidence, Point_Sale, {foreignKey: "Point_Sale_ID"}),
                        attributes:[
                            'ID',
                            'Name'
                        ]
                    },
                    {
                        model: User,
                        association: new BelongsTo(Shelf_Evidence, User, {foreignKey: "User_ID"}),
                        attributes:[
                            'ID',
                            'Username'
                        ]
                    }
                ]
            })
            resolve(result)
        }catch(e){
            reject(e)
        }
    })
}
const findShelfEvidenceByUser = (user_id) =>{
    return new Promise(async (resolve, reject)=>{
        try{
            const result = await Shelf_Evidence.findAll({
                where: {
                    User_ID: user_id
                },
                attributes:[
                    'ID',
                    'Geolocation',
                    'createdAt'
                ],
                include: [
                    {
                        model: Client,
                        association: new BelongsTo(Shelf_Evidence, Client, {foreignKey: "Client_ID"}),
                        attributes:[
                            'ID',
                            'Name'
                        ]
                    },
                    {
                        model: Point_Sale,
                        association: new BelongsTo(Shelf_Evidence, Point_Sale, {foreignKey: "Point_Sale_ID"}),
                        attributes:[
                            'ID',
                            'Name'
                        ]
                    },
                    {
                        model: User,
                        association: new BelongsTo(Shelf_Evidence, User, {foreignKey: "User_ID"}),
                        attributes:[
                            'ID',
                            'Username'
                        ]
                    }
                ]
            })
            resolve(result)
        }catch(e){
            reject(e)
        }
    })
}
const findByIDAndGetMedia = (ID) =>{
    return new Promise(async (resolve, reject)=>{
        try{
            const result = await Shelf_Evidence.findOne({
                where: {
                    ID: ID
                },
                attributes:[
                    'ID',
                    'Geolocation',
                    'createdAt'
                ],
                include: [
                    {
                        model: Shelf_Evidence_Media,
                        association: new HasMany(Shelf_Evidence, Shelf_Evidence_Media, {foreignKey: "Shelf_Evidence_ID"})
                    },
                    {
                        model: Client,
                        association: new BelongsTo(Shelf_Evidence, Client, {foreignKey: "Client_ID"}),
                        attributes:[
                            'ID',
                            'Name'
                        ]
                    },
                    {
                        model: Point_Sale,
                        association: new BelongsTo(Shelf_Evidence, Point_Sale, {foreignKey: "Point_Sale_ID"}),
                        attributes:[
                            'ID',
                            'Name'
                        ]
                    },
                    {
                        model: User,
                        association: new BelongsTo(Shelf_Evidence, User, {foreignKey: "User_ID"}),
                        attributes:[
                            'ID',
                            'Username'
                        ]
                    }
                ]
            })
            resolve(result)
        }catch(e){
            console.log(e)
            reject(e)
        }
    })
}
// create
const newShelfEvidence = ({
    client_id,
    point_sale_id,
    user_id,
    geolocation = "",
    enable = true,
    Photos = []
}) => {
    return new Promise(async (resolve, reject)=>{
        try{
            const letsShelfEvidence = await Shelf_Evidence.create({
                ID: v4(),
                Client_ID: client_id,
                Point_Sale_ID: point_sale_id,
                User_ID: user_id,
                Geolocation: geolocation,
                Enable: enable
            })

            Photos.forEach(async photo => {
                await Shelf_Evidence_Media.create({
                    ID: v4(),
                    Shelf_Evidence_ID: letsShelfEvidence.ID,
                    Photo: `data:${photo.mimetype};base64,${new Buffer.from(photo.buffer).toString('base64')}` 
                })
            })

            resolve({ok: true, client: letsShelfEvidence})
        }catch(e){
            reject(e)
        }
    })
}
// edit
/* const updateByID = (ID) =>{
    return new Promise(async (resolve, reject)=>{
        try{
            const result = await User.findOne({where: {Username: username}})
            resolve(result)
        }catch(e){
            reject(e)
        }
    })
} */
// delete

//Util


module.exports = {
    newShelfEvidence,
    findShelfEvidenceByClient,
    findShelfEvidenceByPointSale,
    findShelfEvidenceByUser,
    findByIDAndGetMedia
}