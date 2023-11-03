const { where } = require('sequelize')
const{User} = require('../models')
module.exports = {
  //get all user
  async index (req, res) {
    try {
      const users = await User.findAll()
      res.send(users)
    } catch (error) {
      res.status(500).send({
         error: 'The users information was incorrect'
        })
    }
   
  },

  //create user
  async create(req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (error) {
      res.status(500).send({
         error: 'The users information was incorrect'
        })
    }
  },

  //edit user
  async put(req, res) {
    try {
      await User.update(req.body,{
      where: {
        id: req.params.userId
      }
    })
    res.send(req.body)
    } catch (error) {
      res.status(500).send({
         error: 'Update user information was incorrect'
        })
    }
  },

  // delete user
  async delete(req, res) {
    try {
      const user = await User.findOne({
        where: {
          id: req.params.userId
        }
      })
      if (!user) {
        return res.status(403).send({
          error: 'The user id is not found'
        })
      }
      await user.destroy()
      res.send(user)
    } catch (error) {
      res.status(500).send({
        error: 'Delete user information was incorrect'
       })
    }
  },

  // show user by id
  async show (req, res) {
    try {
      const user = await User.findOne({
        where: {
          id: req.params.userId
        }
      })
      if (!user) {
        return res.status(403).send({
          error: 'The user id is not found'
        })
      }

      res.send(user)
    } catch (error) {
      res.status(500).send({
        error: 'Users information was incorrect'
       })
    }
  }
}