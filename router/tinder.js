

const router = require('express').Router();

const { getTinderCard, postTinderCard } = require('../controller/tinder');


//get all...

router.get('/', getTinderCard)

router.post('/', postTinderCard)



module.exports = router;