var marvelApiKey = "caf809fd4bc0067858336835423deb52";
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

