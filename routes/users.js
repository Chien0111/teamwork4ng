var express = require("express");
var router = express.Router();
var UserModel = require("../models/UserModel");
var jwt = require('jsonwebtoken')
var bcrypt = require("bcrypt");
var path = require('path')

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/create", async function (req, res, next) {
  UserModel.findOne({ username: req.body.username })
    .then(function (data) {
      if (data) {
        res.status(400).json({ mess: "user da ton tai" });
      } else {
        bcrypt.hash(req.body.password, 10).then(function (hash) {
          UserModel.create({
            username: req.body.username,
            password: hash,
          }).then(async function (data) {
            // res.json(data);
            try {
              res.json(error);
            } catch (error) {
              res.json(error);
            }
          });
        });
      }
    })
    .catch(function (err) {
      res.status(500).json(err);
    });
});

router.post('/login', async function(req,res){
  try {
    const user = await UserModel.findOne({username: req.body.username})
    if(user){
      const checkPass = await bcrypt.compare(req.body.password, user.password)
      if(checkPass){
        const token = jwt.sign({id: user._id}, 'thai')
        await UserModel.updateOne({_id:user._id}, {token: token})
        res.cookie('user', token, {expires: new Date( Date.now() + 7*24*60*60*1000) })
        res.status(200).json({mess: 'thanh cong'})
      }else{
        res.status(400).json({mess:'sai password'})
      }
    }else{
      res.status(400).json({mess:'sai username'})
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error)
  }
})

router.put('/logout', function(req,res){
  let token = req.cookies.user
  UserModel.updateOne({token: token},{
    token:''
  })
  .then(function(data){
    res.status(200).json({mess:'logout ok'})
  }).catch(function(err){
    res.status(500).json(err)
  })
})


module.exports = router;
