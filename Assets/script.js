var hero = document.getElementById('hero');
var btn = document.getElementById('submitbtn');
var characterImage = document.querySelector('#character-image');
var comicsList = document.querySelector('#comics-list');
var subList = document.getElementById('subreddits');
var favList = document.getElementById('favlist')
var publicMarvelKey = "caf809fd4bc0067858336835423deb52";
var privateMarvelKey = "abe53a41ffd746fcc53851093d55fa7321bf7c8f";
var timestamp = Date.now();
var hash = md5(`${timestamp}${privateMarvelKey}${publicMarvelKey}`);
var marvelUrlStart = 'https://gateway.marvel.com/v1/public/characters/';
var favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// favorite code
    favorites.forEach(function(favorite){
        var li = document.createElement('li')
        li.innerHTML = favorite.href
        favList.appendChild(li)
    });





btn.addEventListener('click', heroSelect);
btn.addEventListener('click', getMarvelApi);

function getApi(){
  var requestUrl = 'https://www.reddit.com/subreddits/search.json?q=hulk'
  
  
  var heroReddit = 'https://www.reddit.com/search.json?q={hero-name}'
  
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
    var comic = data.data.results[0].comics.items[i].resourceURI;
    var comicTitle = data.data.results[0].comics.items[i].name;
    // listComics.innerHTML = `<a href="${comic}?ts=${timestamp}&apikey=${publicMarvelKey}&hash=${hash}">${comicTitle}</a>`
    listComics.textContent = comicTitle;
    comicsList.appendChild(listComics);
  }})
  .catch(function(err) {
    console.log(err);   // Log error if any
  })
};

//   Reddit API
function heroSelect(){
    var heroChoice = hero.value;
    var heroSubredditURL = 'https://www.reddit.com/search.json?q=' + heroChoice;
    fetch(heroSubredditURL)
    .then(function(response) {
        return response.json();
    })
    .then((data)=> {
        console.log(data);
        for (var i = 0; i<5; i++) {
            var listReddit = document.createElement('li');
            var subreddit = data.data.children[i].data.permalink
            var subredditTitle = data.data.children[i].data.title
            listReddit.innerHTML = `<a href = 'https://www.reddit.com/${subreddit}'>${subredditTitle}</a>`
            // Favorite button code
            var favBtn = document.createElement('button')
            favBtn.textContent = 'Favorite'
            favBtn.setAttribute("id", data.data.children[i].data.id)
            favBtn.addEventListener('click', (e)=> {
                item = e.target
                var id = data.data.children[i].data.id
                    index = favorites.find(element => {
                        return element.id === id;
                      });
                if (!id) return;
                if (index == undefined){
                    favorites.push({id: id, href:`<a href = 'https://www.reddit.com/${subreddit}'>${subredditTitle}</a>`});
                    item.className = 'fav'
                } else {
                    favorites.splice(index, 1)
                    item.className = '';
                }
                                localStorage.setItem('favorites', JSON.stringify(favorites))
                            });
            // appending code
            subList.appendChild(listReddit)
            listReddit.appendChild(favBtn)
        }
    })
    .catch(function(err) {
        console.log(err);   // Log error if any
    });

};
