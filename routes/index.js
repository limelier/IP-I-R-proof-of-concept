const router = require('express').Router();

const restaurants = require('./restaurants');

router.use('/restaurants', restaurants);

router.get('/', (req, res) => {
    res.json({message: 'it\'s alive!'})
});

module.exports = router;