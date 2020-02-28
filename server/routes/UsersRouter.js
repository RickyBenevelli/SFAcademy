const express = require('express');
const router = express.Router();


const controllers = require('../controllers/userController')

router.get('/test',controllers.test);

router.get('/testdata', controllers.testdata );

router.get('/list', controllers.list );

router.post('/sign-up', controllers.creating);

router.get('/sign-in',controllers.get);

router.get('/saved', (req, res) => { //DA CAMBIARE

  res.json({status: 'Utente Salvato'});

});

module.exports = router;