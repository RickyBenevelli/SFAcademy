const express = require('express');
const router = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken'); //da fare: criptare le password
const User = require('../model/User'); 
const Votation = require('../model/Votation');
router.use(cors());

const controllers = require('../controllers/userController')

router.post('/sign-up', controllers.creating);

router.get('/sign-in', controllers.enter);

router.post('/votation', controllers.votation );

router.get('/scores', controllers.scores);

module.exports = router;