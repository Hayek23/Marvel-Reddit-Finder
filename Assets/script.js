var hero = document.getElementById('hero');
var btn = document.getElementById('submitbtn');
var characterImage = document.querySelector('#character-image');
var comicsList = document.querySelector('#comics-list');
var subList = document.getElementById('subreddits');
var publicMarvelKey = "caf809fd4bc0067858336835423deb52";
var privateMarvelKey = "abe53a41ffd746fcc53851093d55fa7321bf7c8f";
var timestamp = Date.now();
var hash = md5(`${timestamp}${privateMarvelKey}${publicMarvelKey}`);
var marvelUrlStart = 'https://gateway.marvel.com/v1/public/characters/';

btn.addEventListener('click', heroSelect);
btn.addEventListener('click', getMarvelApi);

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
               
 if (hero.value === 'captain-america') {
  var heroId = "1009220";
  characterImage.src = "http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087/portrait_incredible.jpg";
 } else if (hero.value === 'The-Hulk') {
  var heroId = "1009351";
  characterImage.src = "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/portrait_incredible.jpg";
 } else if (hero.value === 'Iron-Man') {
  var heroId = "1009368";
  characterImage.src = "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55/portrait_incredible.jpg";
 } else if (hero.value === 'Spiderman') {
  var heroId = "1009610";
  characterImage.src = "http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b/portrait_incredible.jpg";
 } else if (hero.value === 'Wolverine') {
  var heroId = "1009718";
  characterImage.src = "http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf/portrait_incredible.jpg";
 };

  fetch(`${marvelUrlStart}${heroId}?ts=${timestamp}&apikey=${publicMarvelKey}&hash=${hash}`)
  .then(function(response) {
    return response.json();
    })  // Convert the data into JSON
    .then(function(data) {
      console.log(data);   // Logs the data to the console
  // for loop for character comic
  for (var i = 0; i<5; i++) {
    var listComics = document.createElement('li');
    listComics.textContent = data.data.results[0].comics.items[i];
    console.log(listComics);
    listComics.appendChild(comicsList);
  }})
  .catch(function(err) {
    console.log(err);   // Log error if any
  })
};

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


