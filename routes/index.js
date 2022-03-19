var express = require('express');
var router = express.Router();
var {checkLogin, checkUser} = require('../checkLogin')

/* GET home page. */
router.get('/login',checkUser, function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/create', function(req, res, next) {
  res.render('create', { title: 'Create' });
});

router.get('/home', checkLogin,function(req, res, next) {
  res.render('home', { title: 'Home' });
});

module.exports = router;
