const express = require('express');
const router = express.Router();

router.get('/tweets', (req, res) => {
    const str = [
        {
            "name": "Sample Tweet",
            "msg": "This is my first tweet!",
            "username": "Ibraheem"
        },
        {
            "name": "Sample Tweet 2",
            "msg": "React JS is so simple!",
            "username": "testUserName"
        },
        
    ];
    res.end(JSON.stringify(str));
});

router.post('/addTweet', (req, res) => {
    res.end('NA');
});

module.exports = router;