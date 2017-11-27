const express = require('express');
const router = express.Router();
const queries = require('../db/queries');
const path = require('path');

const table = "kids"

router.put("/:id", (req, res) => {
  queries[table].updated(req.params.id, req.body)
  .then((kids) => res.send(200))
});

router.get('/', function (req, res) {
  queries
    .kids
    .getAll()
    .then(kids => {
      res.json(kids)
    });
})

router.get('/:id', (req, res) => {
  queries
  .kids
  .getOne(req.params.id)
  .then(kids => {
    res.json(kids);
  });
})

router.post('/', (req, res) => {
  queries
  .kids
  .create(req.body)
  .then(results => {
    res.send(results[0]);
  });
})

router.get("/", (req, res) => {
  var withParents = req.query.withParents
  var query = queries[tables].read(req.params.id)
  if (withParents) {
    queries.kids_parents.getParentsForKids(req.params.id)
    .then((parents) => {
      return query.then((kids) => {
        kids.parents = parents
        res.json(kids)
      })
    })
  } else {
  query
  .then((kids) => res.json(kids))
 }
})


module.exports = router