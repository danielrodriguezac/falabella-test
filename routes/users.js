var express = require('express');
const router = express.Router();
const axios = require('axios').default

const API_URL = 'https://api.gael.cloud/general/public/monedas/uf'

/* GET users listing. */
router.get('/:uf', async function(req, res, next) {
  const response = await axios.get(API_URL)
  const calculationResult = Math.round(parseInt(req.params.uf) * parseFloat(response.data.Valor.replace(',', '.'))) 

  console.log('RESPONSE', response.data, req.params.uf, calculationResult)
  const result = {
    value: calculationResult
  }
  res.send(result)
  // next()
  // req.params.uf
  // res.send('respond with a resource');

});

module.exports = router;
