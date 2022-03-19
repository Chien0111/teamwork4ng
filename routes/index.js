var express = require("express");
var router = express.Router();
var { checkLogin, checkUser } = require("../checkLogin");
var ListModel = require('../models/ListModel')

/* GET home page. */
router.get("/login", checkUser, function (req, res, next) {
  res.render("login", { title: "Login" });
});

router.get("/create", function (req, res, next) {
  res.render("create", { title: "Create" });
});

router.get("/home", checkLogin, function (req, res, next) {
  res.render("home", { title: "Home" });
});

router.get("/list", checkLogin,async function (req, res, next) {
  try {
    const listData = await ListModel.find({ userID: req.id });
    res.render("pages/listPage/list", {listData});
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
