const express = require('express');
const router = express.Router();

router.route('/')
    .get((req,res,next) => {
        res.render('index', { name: 'Chris-Emio', lastname: 'Raymond' });
    })

    .post((req,res,next) => {
        const message = req.body.string;
        const messageLength = message.length;
        res.render('index', { string: message, length: messageLength});
    });

module.exports = router;
