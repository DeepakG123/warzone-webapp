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

router.route('/:id').get((req, res) => {
  Bunker.findById(req.params.id)
    .then(Bunker => res.json(Bunker))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Bunker.findByIdAndDelete(req.params.id)
    .then(() => res.json('Bunker deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Bunker.findById(req.params.id)
    .then(Bunker => {
      Bunker.number = Number(req.body.number);
      Bunker.lat = Number(req.body.lat);
      Bunker.long = Number(req.body.long);

      Bunker.save()
        .then(() => res.json('Bunker updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
