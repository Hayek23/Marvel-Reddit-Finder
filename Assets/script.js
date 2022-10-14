var hero = document.getElementById('hero');
var btn = document.getElementById('submitbtn');
var subList = document.getElementById('subreddits');
var publicMarvelKey = "caf809fd4bc0067858336835423deb52";
var privateMarvelKey = "abe53a41ffd746fcc53851093d55fa7321bf7c8f";
var timestamp = Date.now()
var hash = md5(`${timestamp}${privateMarvelKey}${publicMarvelKey}`)

btn.addEventListener('click', heroSelect);

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
                  
                  
                  // Marvel API
                function getMarvelApi(){
                    var marvelUrlStart = 'https://gateway.marvel.com/v1/public/characters' //+ hero.value
                    
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


//   Reddit API
function heroSelect(){
    var heroChoice = hero.value;
    var heroSubredditURL = 'http://www.reddit.com/search.json?q=' + heroChoice;
    fetch(heroSubredditURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);   // Logs the data to the console
        for (var i = 0; i<5; i++) {
            var listReddit = document.createElement('li');
            listReddit.textContent = 'https\\' + data.data.children[i].data.permalink
            subList.appendChild(listReddit)
        }
    })
    .catch(function(err) {
        console.log(err);   // Log error if any
    });

};


