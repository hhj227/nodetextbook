var express = require('express');
var { User } = require('../models');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
    User.findAll()
          .then((users) => {
              console.log(users);
              res.status(201).json(users);
          })
          .catch((err) => {
            console.error(err);
next(err);
});
});

// POST /users
router.post('/', (req, res, next) => {
    console.log(req.body);
      User.create({
        name: req.body.name,
        age: req.body.age,
        married: req.body.married,
      })
      .then((result) => {
        console.log(result);
        res.status(201).json(result);
      })
      .catch((err) => {
        console.log(err);
        next(err);
      })
});

module.exports = router;





