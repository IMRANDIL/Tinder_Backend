

const router = require('express').Router();

const { getTinderCard } = require('../controller/tinder');


//get all...

router.get('/', getTinderCard)





module.exports = router;