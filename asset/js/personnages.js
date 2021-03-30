divPersonnages = document.querySelector('#list-episodes');

fetch("https:/rickandmortyapi.com/api/character?")
.then((response)=> {
  return response.json();
})
.then((responJson) => {
  let listPersonnage = responJson.results;
  console.log(listPersonnage);
  let filter = listPersonnage.filter(x => x.species);

  for (const personnage of listPersonnage) {
    divPersonnages.innerHTML +=
    `<div class="personnage-name" id="personnage-${personnage.id}">
    <section class = "container">
            <div class="image">
                <img class="img" src="${personnage.image}" alt="photo_${
                    (personnage.name)
                }">
               <h3 class="nom">${personnage.name}</h3>

            </div>
          </section>
          </div>
    `;
    // let elmtEpisode = document.getElementById(`episode-${episode.id}`);
  }
  
  // toute les div avec la class episode-name let         
  let divPersonnage = document.querySelectorAll('.personnage-name'); 

  // console.log('données en index 0 : ', listEpisode[0]);
  // console.log('element HTML en index 0 : ', divPersonnage[0]);

  for (let index = 0; index < divPersonnage.length; index++) {
    divPersonnage[index].addEventListener('click', () => {
      let listUriEpisode = listPersonnage[index].episode;
      console.log(listUriEpisode);
      
      let divToogle = document.querySelector('#toogle'); 
      console.log(divToogle);
      console.log(divPersonnages)
      // ça marche pas pour l'instant
      // let section = document.getElementById("section");
      // section.style.filter= "blur";
      // section.style.opacity= ".1";

      divToogle.innerHTML += `
        <div class="popup">
          <img src="${listPersonnage[index].image}" alt="" class="popup_img">
          <ul class="ul_popup">
              <li class="li_clicl">Nom :${listPersonnage[index].name}</li>
              <li class="li_clicl">status :${listPersonnage[index].status}</li>
              <li class="li_clicl">Espèce :${listPersonnage[index].species}</li>
              <li class="li_clicl">Type :${listPersonnage[index].type}</li>
              <li class="li_clicl">Origin :${listPersonnage[index].origin.name}</li>
              <li class="li_clicl">Genre :${listPersonnage[index].gender}</li>
              <li class="li_clicl">Leu d'habitation :${listPersonnage[index].location.name}</li>
              <li class="li_clicl">Dernier lieu Connu :${listPersonnage[index].location.name}</li>
              <li class="li_clicl">Episode  :<span id="perso-${listPersonnage[index].id}"></span></li>
          </ul>
        </div>`
        divToogle.addEventListener("click", function (event) {
        section.style.filter= "none";
        section.style.opacity= "none";
        console.log(event);
        let chemin = event.path[1];
        console.log(chemin);
        chemin.style.display = "none";
        // let section = document.getElementById("section");
      });
      getEpisodeDetails(listUriEpisode, divPersonnage[index], listPersonnage[index].id);
    });
  }
})
.catch((error) => {
  console.error(error);
})
// changer caractère en episode
function getEpisodeDetails(listUriEpisode, divToogle, idPersonnage) {
  let reponseArrray = [];

  for (const uri of listUriEpisode) {
    fetch(uri).then((res)=> {
      return res.json()
    }).then((response)=> {
      console.log(response.id)
      reponseArrray.push(response);
      document.getElementById(`perso-${idPersonnage}`).innerHTML += `
          <span>${response.name} , </span>
      `;
    })
  }
}

// je cree une variable qui va contenir le resultat de mes types d'espèce en format objet
let types = {};
let buttons = document.querySelectorAll(".species");
buttons.forEach(button => {
  // j'ai utilisé un change au lieu du click car les radio change ce sont les boutons qui sont clické
  button.addEventListener("change", function (event) {
    console.log(event);
    // avec le event.target je recupère ma balise cliqué
    let specie = event.target.value;
    //je lui ai mis "species=${specie}" à la fin pour qu'il aille recuperer mes datas en fonction des espèces
    // mon specie fait reference à ma variable en haut qui contien l'element radio selectionné.
    fetch(`https:/rickandmortyapi.com/api/character?species=${specie}`)
    .then((response)=> {
      return response.json();
      })
    .then((characters) => {
      const {info, results} = characters;
      createSpecies(results);
    })  
    divPersonnages.style.display = "none";
    // if(=! specie)
  })
});

function createSpecie (specie) {
  return `
    <div class="specie">
      <div class="specie_img">
        <img src="${specie.image}" alt="">
      </div>
      <h2 class="specie_nom">${specie.name}</h2>
      <h2 class="specie_nom">Je suis : ${specie.species}</h2>
    </div>
  `
}

function createSpecies (species) {
  let species_container = document.querySelector(".species_container");
  console.log(species_container);
  species_container.innerHTML = "";//je vide ma div 
  species.forEach(specie => {
    // je concataine species_container avec la fonction createspecie 
    species_container.innerHTML += createSpecie(specie);
  });
}

