const express = require('express');
const router = express.Router();
const {getData,} =  require('../controller/controller');


router.get('/', getData);

module.exports = router;