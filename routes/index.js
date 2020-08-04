var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  
  let numero1 = req.query.numero1;
  let numero2 = req.query.numero2;

  let resultado = parseInt(numero1) + parseInt(numero2);

  res.render('index', { numero: resultado });
});

module.exports = router;
