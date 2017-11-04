var express = require('express');
var Twitter = require('twitter');

var router = express.Router(); 
var client = new Twitter({
    consumer_key: 'LOsrcAneH8woKqHkgNCHNNI2h',
    consumer_secret: 'V3EPj0ZBHrwXMaVOD27XQMEgtRL4B4FmqfVlDpZHjlVaXhQmuZ',
    access_token_key: '2167471745-k4BfZLXGlYgcFKosTepoi5XrgJ351AAnw1eP9wS',
    access_token: '2167471745-k4BfZLXGlYgcFKosTepoi5XrgJ351AAnw1eP9wS',
    access_token_secret: 'aIcc920ob1OzCKqVzhnPDar8PM0kijED1r5BHDlTjGyUT',
});

router.get('/', function(req, res, next) {
  // https://dev.twitter.com/rest/reference/get/statuses/user_timeline
  client.get('statuses/user_timeline', { screen_name: 'adamsjustin77', count: 20 }, function(error, tweets, response) {
    if (!error) {
      res.status(200).render('index', { title: 'Express', tweets: tweets });
    }
    else {
      res.status(500).json({ error: error });
    }
  });
});

module.exports = router;