var Twitter = require('twitter');

command = process.argv[2];

queryString = process.argv[3];

// var inquiry = require('inquirer');

var Spotify = require('node-spotify-api');

// Twitter API retrieval
var client = new Twitter({
    consumer_key: 'LOsrcAneH8woKqHkgNCHNNI2h',
    consumer_secret: 'V3EPj0ZBHrwXMaVOD27XQMEgtRL4B4FmqfVlDpZHjlVaXhQmuZ',
    access_token_key: '2167471745-k4BfZLXGlYgcFKosTepoi5XrgJ351AAnw1eP9wS',
    access_token: '2167471745-k4BfZLXGlYgcFKosTepoi5XrgJ351AAnw1eP9wS',
    access_token_secret: 'aIcc920ob1OzCKqVzhnPDar8PM0kijED1r5BHDlTjGyUT',
});

// function to run when command = my-twitter
function twitterSearch() {

//paramters
var params = {screen_name: queryString, count: 20};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
 if (!error) {
     for(i = 0; i < tweets.length; i++) {
   console.log('--------------------------------');
   console.log(tweets[i].text);
   console.log('--------------------------------');
     }
 }
});

}

if(command === 'my-twitter'){
    twitterSearch();
}

// Spotify API retrieval

var Spotify = require('node-spotify-api');

var spotify = new Spotify({
 id: '15ad892398f0480bbda8d61bf50e523d',
 secret: '84dd82e1a1d2430687950782f9fc6cdd'
});



function spotifySearch() {

spotify.search({ type: 'track', query: queryString, limit: 2 }, function(err, data) {
 if (err) {
   return console.log('Error occurred: ' + err);
 }

console.log('Artist: ' + data.tracks.items[0].album.artists[0].name); //Returning Artist

console.log('Song Title: ' + queryString); //Returning Song Title

console.log('Preview: ' + data.tracks.items[0].album.external_urls.spotify); //Link to Song on Spotify

console.log('Album: ' + data.tracks.items[0].album.name); //Album Name

});

}

if(command === 'spotify-this-song'){
    spotifySearch();
}



// Request for OMDB API

function movieSearch() {
var request = require('request');
request('http://www.omdbapi.com/?apikey=40e9cece&t=' + queryString, function (error, response, body) {
  console.log("Title: " + JSON.parse(body).Title); // Print the Movie title.
  console.log('Year of Release: ' + JSON.parse(body).Year); // Print the Movie year.
  console.log('IMDB Rating: ' + JSON.parse(body).imdbRating); // Print the Movie IMDB rating.
  console.log('Rotten Tomatoes Rating: ' + JSON.parse(body).Ratings[1].Value); // Print the Movie RT rating.
  console.log('Country of Production: ' + JSON.parse(body).Country); // Print the Movie Country of Origin.
  console.log('Movie Language: ' + JSON.parse(body).Language); // Print the Movie Language.
  console.log('Movie Plot: ' + JSON.parse(body).Plot); // Print the Movie Plot.
  console.log('Movie Cast: ' + JSON.parse(body).Actors); // Print the Movie Cast.
});
};

if(command === 'movie-this') {
    movieSearch();
}


// Custom do-what-it-says request

var content;

fs = require('fs')
fs.readFile('random.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  content = data;
  //console.log(data);

  var randomText = data
  
  var textArray = randomText.split(',');
  
  var textCommand = textArray[0];
   
  queryString = textArray[1];

 // console.log(textCommand)
  //console.log(queryString)

  if(command === 'do-what-it-says'){
    if(textCommand === 'spotify-this-song') { spotifySearch(); }
    if(textCommand === 'movie-this') { movieSearch(); }
    if(textCommand === 'my-twitter') { twitterSearch(); }

}
});




/*
module.exports = {
    twitterKeys,
    spotifyKeys,

    }
 */   