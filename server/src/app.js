let express = require('express')
let bodyParser = require('body-parser')
let cors = require('cors')
const { sequelize } = require('./models')

const config = require('./config/config')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

require('./route')(app)

app.get('/status', function (req, res) {
    res.send('Hello nodejs server bunthita')
})

app.get('/hello/:person', function (req,res) {
    console.log('hello - ' + req.params.person)
    res.send('sey hello with ' + req.params.person)
   })
   /*// get user by id
   app.get('/muser/:muserId', function (req, res) {
    res.send('ดูข้อมูลผู้ใช้งาน: ' + req.params.userId)
   })
   // get all user
   app.get('/musers', function (req, res) {
    res.send('เรียกขอ้ มูลผใู้ชง้านทDงัหมด')
   })
   // create user
   app.post('/muser/', function (req, res) {
    res.send('ทําการสร้างผู้ใช้งาน: ' + JSON.stringify(req.body))
   })
   // edit user
   app.put('/muser/:muserId', function (req, res) {
    res.send('ทาํการแกไ้ขผใุ้ชง้าน: ' + req.params.userId + ' : ' +
   JSON.stringify(req.body))
   })
   // delete user
   app.delete('/muser/:muserId', function (req, res) {
    res.send('ทําการลบผุ้ใช้งาน: ' + req.params.userId + ' : ' + 
    JSON.stringify(req.body))
   })*/
let port = process.env.PORT || config.port

sequelize.sync({ force: false }).then(() => {
    app.listen(port, function () {
        console.log('Server running on ' + port)
    })
})