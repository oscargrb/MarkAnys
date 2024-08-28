const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors') // mas adelante va a tener otras configuraciones
require('dotenv').config()
require('./Models/shelf_evidence_media_model')
var cookieParser = require('cookie-parser')
const corsOptions = require('./Config/CorsOptions')
const credentials = require('./Middleware/credentials')


const app = express()

app.use(credentials)

// Configuracion de CORS
app.use(cors(corsOptions));

// Leer body solicitudes
app.use(express.urlencoded({ extended: false }));

// enviar JSON
app.use(express.json());

//servir archivos estaticos
//app.use('/', express.static(`${__dirname}/public`));

// configurar cookie parser
app.use(cookieParser())

// recibir archivos binarios
app.use(bodyParser.raw({type:"application/octect-stream", limit: '10mb'}))

////// RUTAS ///////

app.get('/echo', (req, res) => res.json({value: 'Echo'}))

app.use('/user', require('./Routes/User_route'))
app.use('/shelf', require('./Routes/Shelf_evidence_route'))
app.use('/PointSale', require('./Routes/Point_Sale_route'))

/* app.use('/auth', require('./routes/auth_route'))
app.use('/bussiness', require('./routes/business_route'))
app.use('/bussiness', require('./routes/business_media_route')) */

app.all('*', (req, res) => {
    res.status(404);
    res.send('404 - no found')
});

app.listen(process.env.SERVER_PORT);

console.log('server online on ', process.env.SERVER_PORT)