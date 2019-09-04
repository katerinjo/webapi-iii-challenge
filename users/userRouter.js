const express = require('express');
const db = require('./userDb');

const router = express.Router();

router.post('/', validateUser, (req, res) => {
  db.insert(req.body);
  res.send('user added', req.body);
});

router.post('/:id/posts', validateUserId, (req, res) => {

});

router.get('/', (req, res) => {

});

router.get('/:id', validateUserId, (req, res) => {

});

router.get('/:id/posts', validateUserId, (req, res) => {

});

router.delete('/:id', validateUserId, (req, res) => {

});

router.put('/:id', validateUserId, (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {
  const { id } = req.params;
  const storedUser = db.getById(id);
  if (storedUser) {
    req.user = storedUser;
    next();
  } else {
    res.status(400).json({ message: "invalid user id" });
  }
};

function validateUser(req, res, next) {
  const user = req.body;
  if (!user) {
    res.status(400).json({ message: "missing user data" });
  } else if (!user.name) {
    res.status(400).json({ message: "missing required name field"});
  } else {
    next();
  }
};

function validatePost(req, res, next) {

};

module.exports = router;
