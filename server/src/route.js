const UserAuthenController = require('./controllers/UserAuthenController')
const UserController = require('./controllers/UserController')
const isAuthenController = require('./authen/isAuthenController')
const waterfallController = require('./controllers/waterfallController')

module.exports = (app) => {
     // get user by id
     app.get('/users', UserController.index,UserController.index)
     app.get('/waterfalls', waterfallController.index)
     // create user
     app.post('/user', UserController.create)
     app.post('/waterfall', waterfallController.create)
     // edit user, suspend, active
     app.put('/user/:userId', UserController.put)
     app.put('/waterfall/:waterfallId', waterfallController.put)
     // delete user
     app.delete('/user/:userId', UserController.delete)
     app.delete('/waterfall/:waterfallId', waterfallController.delete)
     // get all user
     app.get('/user/:userId', UserController.show)
     app.get('/waterfall/:waterfallId', waterfallController.show)
     // login
     app.post('/login', UserAuthenController.login)


}   