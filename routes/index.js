var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  
  let numero1 = req.query.numero1;
  let numero2 = req.query.numero2;
  let tipo = req.query.tipo;
  let resultado = 0;
  let error = "";

  if (tipo === 'suma') {
  /* Logica */
    resultado = parseInt(numero1) + parseInt(numero2);
  } else if (tipo === 'resta') {
  /* logica */
    resultado = parseInt(numero1) - parseInt(numero2);
  } else if (tipo === 'multi') {
  /* logica */
    resultado = parseInt(numero1) * parseInt(numero2);
  } else if (tipo === 'divi') {
  /* logica */
    resultado = parseInt(numero1) / parseInt(numero2);
  } else {
  /* logica */
    error = "Tipo invalido"
  }

  console.log(tipo);

  res.render('index', { resultado: resultado, error: error });
});

module.exports = router;
