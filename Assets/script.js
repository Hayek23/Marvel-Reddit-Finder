// function getApi(){
//     var requestUrl = 'https://www.reddit.com/subreddits/search.json?q=hulk'

//     fetch(requestUrl)
//         .then(function(response){
//             // console.log(data)
//             return response.json();
//         })
// }
// getApi()

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
  });
