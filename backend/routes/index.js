var express = require('express');
var router = express.Router();


const fs = require('fs')
const sqlite3 = require('sqlite3');

db = new sqlite3.Database('res/dorms.db');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/floor_plan_design', (req, res, next) => {
  images = fs.readdirSync('./public/images').filter((fname) => fname.endsWith('.png')).map(fname => {
    var extension;
    switch (parseInt(fname.at(-5))) {
      case 1:
        extension = ' Ground Floor';
        break;
      case 2:
        extension = ' Second Floor';
        break;
      case 3:
        extension = ' Third Floor';
        break;
      default:
    }
    return { src: `images/${fname}`, name: fname.at(0).toUpperCase() + fname.slice(1, -5) + extension }
  });
  res.render('floor_plan_design');
});

router.get('/res/rooms', (req, res, next) => {
  db.all('SELECT * FROM rooms', [], (err, rooms) => {
    if (err) {
      throw err;
    } else {
      res.json(rooms);
    }
  });
});

router.get('/res/dorms', (req,res, next) => {
  db.all('SELECT * FROM dorms', [], (err, dorms) => {
    if (err) {
      throw err;
    } else {
      res.json(dorms);
    }
  })
})

module.exports = router;