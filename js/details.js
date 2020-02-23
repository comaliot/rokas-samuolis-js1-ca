const queryString = document.location.search;

const params = new URLSearchParams(queryString);

let id;

if (params.has("id")) {
    id = params.get("id");
} else {
    document.location.href = "index.html";
}

const characterUrl = `https://rickandmortyapi.com/api/character/`;
const detailUrl = `${characterUrl}${id}`;

fetch(detailUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createDetails(json);
    })
    .catch(function() {
        document.location.href = "error.html";
    });

function createDetails(details) {
    console.dir(details);

    const image = document.querySelector('.details-image');
    image.src = details.image;
    image.alt = details.name;

    const name = document.querySelector('h1');
    name.innerHTML = details.name;

    const status = document.querySelector('#status');
    status.innerHTML = details.status;

    const species = document.querySelector('#species');
    species.innerHTML = details.species;

    const origin = document.querySelector('#origin');
    origin.innerHTML = details.origin.name;

    const location = document.querySelector('#location');
    location.innerHTML = details.location.name;

    document.title = details.name + " | " + document.title;
}