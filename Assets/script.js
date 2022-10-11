var marvelApiKey = "caf809fd4bc0067858336835423deb52";
var heroRedditURL = 'http://www.reddit.com/search.json?q={hero-name}';
var hero = document.getElementById('hero');
var subredditText = document.getElementById('fill-in');
var btn = document.getElementById('submitbtn');

function setURL(){
    var heroRedditURL = 'http://www.reddit.com/search.json?q=' + hero.value;
}

console.log

btn.addEventListener('click', showText);

function showText(){
    subredditText.textContent = hero.value
};

console.log(hero.value);

fetch(heroRedditURL)
  .then(function(res) {
    return res.json();   // Convert the data into JSON
  })
  .then(function(data) {
    console.log(data);   // Logs the data to the console
  })
  .catch(function(err) {
    console.log(err);   // Log error if any
  });




