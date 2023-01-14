var express = require('express');
var router = express.Router();


const fs = require('fs')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/floorplan_design', (req, res, next) => {
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
    return { src: `images/${fname}`, name: fname.at(0).toUpperCase() + fname.slice(1, -5) + extension}
  });
  res.render('floorplan_design', { imageList: images });
});


module.exports = router;