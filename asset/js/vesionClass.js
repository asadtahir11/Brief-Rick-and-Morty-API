// fichier episode réalisé avec des classes:
const {API} = require("./config");

class Episode{
    episodes = [];
    saisonsFilter = ["S01", "S02", "S03", "S04"]
    constructor(){
       this.fetchData(API.episodeLink + "/" + Array.from({length: 41}, (v,k) => k+1))
       .then(episodes => {
           this.episodes = episodes;
           this.createSectionEpisodes();
        //    console.log(episodes);
       })
    }

    createSectionEpisodes(){
        let app_lists = document.querySelector(".app_lists");
        console.log(this.saisonsFilter)
        this.saisonsFilter.forEach((saisonFilter, i) => {
            let episodes = this.episodes.filter(episode => episode.episode.indexOf(saisonFilter) > -1); // filtre les episodes et les classe par saison
            app_lists.appendChild(
                this.createHeader(episodes, i + 1)
            )
        });
    }

    // la fonction dans une class deviens une methode et on ne met pas le fot function au debut et pour l'appeller onfait un "this"
    fetchData(uri) {
        return fetch(uri)
        .then(res => res.json())
    }
    // une deuxieme methode qui cree des episode par saison
    createEpisodes(episodes){
        let ul = document.createElement("ul");
        ul.classList = "ul_list";
        episodes.forEach(episode => {
            let li = document.createElement("li");
            li.innerHTML += `
            <div class="card">
                <fieldset>
                    <legend><h2 class="text_head" data-url="${episode.url}">Episode ${episode.id}: <br /> ${episode.name}</h2></legend>
                    <p class="text">${episode.episode}</p>
                    <p class="text">Date de Création: ${episode.air_date}</p>
                    <p class="text">Nombre de personnages: ${episode.characters.length}</p>
                </fieldset>
            </div>
            `;
            li.querySelector("h2").addEventListener("click", this.showCharacters);
            ul.appendChild(li);
        });
        return ul;
    }

    showCharacters(event){
        this.fetchData(event.target.dataset.url)
    }

    createHeader(episodes, i){
        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        h2.classList = "saison_section";
        h2.textContent = "Saison "+ i;
        div.appendChild(h2);
        div.appendChild(this.createEpisodes(episodes));
        return div;
    }
}


new Episode();