
function getApi(){
        var requestUrl = 'https://www.reddit.com/subreddits/search.json?q=hulk'
    
    
    var heroReddit = 'http://www.reddit.com/search.json?q={hero-name}'
    
    fetch(heroReddit)
      .then(function(res) {
            return res.json();   // Convert the data into JSON
          })
          .then(function(data) {
                console.log(data);   // Logs the data to the console
              })
              .catch(function(err) {
                    console.log(err);   // Log error if any
                  })};
                
function getMarvelApi(){
    
var marvelUrlStart = 'https://gateway.marvel.com/v1/public/characters'
var publicMarvelKey = "caf809fd4bc0067858336835423deb52";
var privateMarvelKey = "abe53a41ffd746fcc53851093d55fa7321bf7c8f";
var timestamp = Date.now()
var hash = md5(`${timestamp}${privateMarvelKey}${publicMarvelKey}`)

fetch(`${marvelUrlStart}?ts=${timestamp}&apikey=${publicMarvelKey}&hash=${hash}`)
  .then(function(res) {
    return res.json();   // Convert the data into JSON
  })
  .then(function(data) {
    console.log(data);   // Logs the data to the console
  })
  .catch(function(err) {
    console.log(err);   // Log error if any
  })};
  getMarvelApi()

var hero = document.getElementById('hero');
var subredditText = document.getElementById('reddit');
var btn = document.getElementById('submitbtn');

btn.addEventListener('click', showText);

function showText(){
    var heroChoice = hero.value;
    var heroSubredditURL = 'http://www.reddit.com/search.json?q=' + heroChoice;
    fetch(heroSubredditURL)
    .then(function(res) {
        return res.json();   // Convert the data into JSON
    })
    .then(function(data) {
        
        console.log(data);   // Logs the data to the console
    })
    .catch(function(err) {
        console.log(err);   // Log error if any
    });

};


