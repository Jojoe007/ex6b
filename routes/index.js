var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* RESTful API */
/* GET BMI Calculator */
router.get('/bmiCal/:weight/:height', (req, res, next) => {
  const result = { "bmi": undefined, "desc": undefined };
  const bmi = req.params.weight / Math.pow((req.params.height / 100), 2);

  result.bmi = bmi.toFixed(2);
  if (bmi > 30) {
    result.desc = "Obesity";
  } else if (bmi > 25) {
    result.desc = "Overweight";
  } else if (bmi > 18.5) {
    result.desc = "Normal Weight";
  } else {
    result.desc = "Underweight";
  }

  res.json(result);
});

module.exports = router;
