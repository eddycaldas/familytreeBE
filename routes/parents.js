const express = require('express');
const router = express.Router();
const queries = require('../db/queries');
const path = require('path');

const table = "parents"

router.put('/:id', (req, res) => {
  queries[table].updated(req.params.id, req.body)
  .then((parents) => res.send(200))
});

router.get('/', function (req, res) {
  queries
    .parents
    .getAll()
    .then(parents => {
      res.json(parents)
    });
})

router.get('/:id', (req, res) => {
  queries
  .parents
  .getOne(req.params.id)
  .then(parents => {
    res.json(parents);
  });
})

router.post('', (req, res) => {
  queries
  .parents
  .create(req.body)
  .then(results => {
    res.send(results[0]);
  });
})

router.get("/", (req, res) => {
  var withKids = req.query.withKids
  var query = queries[table].read(req.params.id)
  if (withKids) {
    queries.kids_parents.getKidsForParents(req.params.id)
    .then((kids) => {
      return query.then((parents) => {
        parents.kids = kids
        res.json(parents)
      })
    })
  } else {
  query
    .then((parents) => res.json(parents))
 }
});


module.exports = router


