// TODO: replace not existing type property with "Unknown";

function loadCharacters(json) {
    const characters = json.results;

    const container = document.querySelector('.results');
    let newHTML = "";

    for (let i = 0; i < characters.length; i++) {

        const details = `<div class="col-sm-6 col-md-4 col-lg-3">                
                            <div class="card">    
                                <img class="image" src="${characters[i].image}" alt="${characters[i].name}">
                                <div class="details">
                                    <h4 class="name">${characters[i].name}</h4>
                                    <p>Type: ${characters[i].type}</p>    
                                    <p>Episode count: ${characters[i].episode.length}</p>                                  
                                    <a class="btn btn-primary" href="details.html?id=${characters[i].id}">Details</a>
                                </div>
                            </div>
                        </div>`;

        newHTML += details;
    }

    container.innerHTML = newHTML;
}
