const { where } = require('sequelize')
const{Waterfall} = require('../models')
module.exports = {
  //get all waterfall
  async index (req, res) {
    try {
      const waterfalls = await Waterfall.findAll()
      res.send(waterfalls)
    } catch (error) {
      res.status(500).send({
         error: 'The waterfallsss information was incorrect'
        })
    }
   
  },

  //create waterfall
  async create(req, res) {
    try {
      const waterfall = await Waterfall.create(req.body)
      res.send(waterfall.toJSON())
    } catch (error) {
      res.status(500).send({
         error: 'The create waterfall information was incorrect'
        })
    }
  },

  //edit waterfall
  async put(req, res) {
    try {
      await Waterfall.update(req.body,{
      where: {
        id: req.params.waterfallId
      }
    })
    res.send(req.body)
    } catch (error) {
      res.status(500).send({
         error: 'Update waterfall information was incorrect'
        })
    }
  },

  // delete waterfall
  async delete(req, res) {
    try {
      const waterfall = await Waterfall.findOne({
        where: {
          id: req.params.waterfallId
        }
      })
      if (!waterfall) {
        return res.status(403).send({
          error: 'The waterfall id is not found'
        })
      }
      await waterfall.destroy()
      res.send(waterfall)
    } catch (error) {
      res.status(500).send({
        error: 'Delete waterfall information was incorrect'
       })
    }
  },

  // show waterfall by id
  async show (req, res) {
    try {
      const waterfall = await Waterfall.findOne({
        where: {
          id: req.params.waterfallId
        }
      })
      if (!waterfall) {
        return res.status(403).send({
          error: 'The waterfall id is not found'
        })
      }

      res.send(waterfall)
    } catch (error) {
      res.status(500).send({
        error: 'waterfall information was incorrect'
       })
    }
  }
}