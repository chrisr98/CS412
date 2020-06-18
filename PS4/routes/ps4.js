let express = require('express');
let request = require("request");
let router = express.Router();


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
