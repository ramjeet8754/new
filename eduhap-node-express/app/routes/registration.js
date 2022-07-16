const express = require('express')
const UserController = require('../controller/registration')
const router = express.Router();


router.post('/registration', UserController.registration)

router.post('/otprequest', UserController.otprequest

)


module.exports = router