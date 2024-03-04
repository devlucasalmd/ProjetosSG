const router = require('express').Router()
const OiController =require('../controllers/oi')

router.get('/oi',OiController.initial)
      .get('/',OiController.doc)

module.exports= router;