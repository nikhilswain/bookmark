const express = require("express");
const router = express.Router();

// schema module
const Pins = require("../models/Pins");

// index page get route
router.get("/", (req, res) => {
  Pins.find({}, (err, items) => {
    if (err) console.log(err);
    else {
      res.render("index.ejs", { item: items });
    }
  });
});

// about page route handling
router.get("/about", (req, res) => {
  res.render("about.ejs");
});

router.post("/", async (req, res) => {
  const { pin, pinUrl } = req.body;
  const newPin = new Pins({
    pin,
    pinUrl,
  });
  const urlValidator = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi;

  if (urlValidator.test(pinUrl) === true) {
    try {
      await newPin.save().then(() => {
        res.redirect("back");
      });
    } catch {
      res.redirect("back");
    }
  } else {
    res.redirect("back")
  }
});

module.exports = router;
