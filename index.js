let jokeText = document.getElementById('jokeText');
let jokeBtn = document.getElementById('jokeBtn');
let loading = document.getElementById('loading');
jokeBtn.onclick = function() {
    let options = {
        method: "GET"
    };
    loading.classList.remove("d-none");
    jokeText.classList.add("d-none");
    fetch('https://api.chucknorris.io/jokes/random', options)

        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            loading.classList.add("d-none");
            jokeText.classList.remove("d-none");
            jokeText.textContent = JSON.stringify(jsonData.value);
            //console.log(result)
        });
};