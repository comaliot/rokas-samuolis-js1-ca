const baseUrl = 'https://rickandmortyapi.com/api/';
const characterUrl = `${baseUrl}character`

fetch(characterUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.dir(json);
        loadCharacters(json);
    })
    .catch(function(error) {
        document.location.href = "error.html";
    });

