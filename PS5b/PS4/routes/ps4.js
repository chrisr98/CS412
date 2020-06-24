const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
let request = require("request");


router.get('/', function(req, res, next)  {
    let options = {
        method: 'GET',
        url: 'https://dog.ceo/api/breeds/list/all',
        headers: {
        }
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        res.render('index', {breeds : JSON.parse(response.body)});
    });
});

router.route('/dog_breed')
    .get((req, res, next) => {
        res.render('dog_breed' ,
            {breed: req.query.breed})
    });




module.exports = router;
