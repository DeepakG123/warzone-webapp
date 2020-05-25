const router = require('express').Router();
let Bunker = require('../bunker.model');

router.route('/').get((req, res) => {
  Bunker.find()
  .then(bunkers => res.json(bunkers))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const number = req.body.number;
  const lat = req.body.lat;
  const long = req.body.long;

  const newBunker = new Bunker({number, lat, long});

  newBunker.save()
    .then(() => res.json('Bunker added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
