var marvelApiKey = "caf809fd4bc0067858336835423deb52";

function getApi(){
    var requestUrl = 'https://www.reddit.com/subreddits/search.json?q=hulk'

    fetch(requestUrl)
        .then(function(response){
            console.log(data)
            return response.json();
        })
}
getApi()


