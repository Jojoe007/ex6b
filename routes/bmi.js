var express = require('express');
var router = express.Router();

/* GET BMI Calculator */
router.get('/', (req, res, next) => {
    res.render('bmi/index', {
        title: 'BMI Calculator',
    });
});

router.post('/', (req, res, next) => {
    const result = { "bmi": undefined, "desc": undefined };
    const bmi = req.body.weight / Math.pow((req.body.height / 100), 2);

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

    res.render('bmi/result', {
        title: 'Result',
        bmi: result.bmi,
        desc: result.desc,
    })
});

module.exports = router;