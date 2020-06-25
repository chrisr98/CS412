const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
let request = require("request");

const redis = require("redis");
const client = redis.createClient();


router.get('/', function(req, res, next)  {
    let options = {
        method: 'GET',
        url: 'https://dog.ceo/api/breeds/list/all',
        headers: {
        }
    };

    client.exists(options, (error, response) => {
      if(error) { throw new Error(error);}
      if (response == 1) {
          client.get(options, (error, response) => {
              console.table(response);
              const ans = JSON.parse(response);
              ans.cached = "cached";
              res.send(JSON.stringify(ans + 'cached'));
          })

      } else {
          const ans = JSON.parse(response);
          ans.cached = "not cached";
          client.set(options, ans, (error, response) => {
              console.table(response);
              setTimeout(() => { client.del(options,(err, success) => {
                  if (err) { throw new Error(err)}
              });}, 30000);
              res.send(JSON.stringify(ans + 'nit cached'));
          })
      }
    })
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
