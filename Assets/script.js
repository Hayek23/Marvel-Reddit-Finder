function getApi(){
    var requestUrl = 'https://www.reddit.com/subreddits/search.json?q=hulk'

    fetch(requestUrl)
        .then(function(response){
            // console.log(data)
            return response.json();
        })
}
getApi()
