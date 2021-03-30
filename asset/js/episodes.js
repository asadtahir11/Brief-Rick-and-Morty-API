

const divtableauEpisode = document.querySelector('#list-episodes');
const divSaison = document.querySelector('#selecteurSaison');

// let tableauFetch = ["https://rickandmortyapi.com/api/episode?page=1", "https://rickandmortyapi.com/api/episode?page=2", "https://rickandmortyapi.com/api/episode?page=3"]
// // tableauFetch.map(x => fetch(x))
// // => [fetch("https://rickandmortyapi.com/api/episode?page=1"), fetch("https://rickandmortyapi.com/api/episode?page=2")]
// Promise.all(tableauFetch.map(x => fetch(x)))
// .then(resp => Promise.all(resp.map(x =>x.json())))
// .then(responJson => {
//   console.log('test api ' ,responJson[0]);
//   // traitement des données 
//   //  let allrespJson = respJson[0] + respJson[1] + respJson[2]
//   //  console.log('test api ' ,allrespJson);
// })

fetch("https://rickandmortyapi.com/api/episode?page=1")
.then((response)=> {
  return response.json();
})
.then((responJson) => {
  // divSaison.innerHTML = `
  
  // <input type="checkbox" value="saison 1"> <label for="saison 1">Saison 1</label>
  // <input type="checkbox" value="saison 2"> <label for="saison 2">Saison 2</label>
  // <input type="checkbox" value="saison 3"> <label for="saison 3">Saison 3</label>
  // <input type="checkbox" value="saison 4"> <label for="saison 4">Saison 4</label>
  
  //                       `
  let tableauEpisode = responJson.results;
  //   console.log(tabeauEpisode);
  
  for (const episode of tableauEpisode) {
    let saisons = episode.episode.split('E');
    divtableauEpisode.innerHTML +=
    `<div  class="${saisons[0]}  episodeName"><span style="cursor:pointer;">${episode.episode} <span class="rm">${episode.name}</span></span></div>`; //onclick="displayDiv('episode')" id="episode-${episode.id}"
    // let elmtEpisode = document.getElementById(`episode-${episode.id}`);
  }
  
  // toute les div avec la class episodeName
  let divEpisode = document.querySelectorAll('.episodeName'); 
  
  for (let i = 0; i < divEpisode.length; i++) {
    divEpisode[i].innerHTML += 
    ` <div class ="episode ${i}" style="display: none" >  </div>`
    
    //   console.log(listUriCharacter);
    // getEpisodeDetails(listUriCharacter, divEpisode[i]);

    
  }
  
  let divPersonnage = document.getElementsByClassName('episode')
  
  for (let i = 0; i < divPersonnage.length ; i++) {
    let listUriCharacter = tableauEpisode[i].characters;
    divPersonnage[i].innerHTML += 
    //` <p> assad</p>`
    
    //   console.log(listUriCharacter);
    getEpisodeDetails(listUriCharacter, divPersonnage[i]);
    
  }
  
  
  for (let i = 0; i < divPersonnage.length; i++) {
    
    divEpisode[i].addEventListener("click" , function displayDiv() {
      if (divPersonnage[i].style.display === "none") {
        divPersonnage[i].style.display = "block";
        
      } else {
        divPersonnage[i].style.display = "none";
      }
    } )
  }


  
})
.catch((error) => {
  console.error(error);
})


// fetch("https://rickandmortyapi.com/api/episode?page=2")
// .then((response2)=> {
//     return response2.json();
//   })
//   .then((responJson2) => {
//       let tableauEpisode2 = responJson2.results;
//       //   console.log(tabeauEpisode);
    
//       for (const episode2 of tableauEpisode2) {
//           let saisons2 = episode2.episode.split('E');
//           divtableauEpisode.innerHTML +=
//           `<div  class="${saisons2[0]} , episodeName"><span style="cursor:pointer;">${episode2.episode} ${episode2.name}</span></div>`; //onclick="displayDiv('episode')" id="episode-${episode.id}"
//           // let elmtEpisode = document.getElementById(`episode-${episode.id}`);
//         }
      
//       })
//       .catch((error) => {
//           console.error(error);
// })


function getEpisodeDetails(listUriCharacter, divEp) {
  let reponse = [];
  
  for (const uri of listUriCharacter) {
    fetch(uri)
    .then((resp)=> {
      return resp.json()
    }).then((resp2)=> {
      //console.log(resp2.id)
      //reponse.push(resp2);
      divEp.innerHTML += `<div class = "EpisodeDetails">
      <div><img src= "${resp2.image}"</div>
      <div> Nom : ${resp2.name} </div>
      <div> Genre : ${resp2.gender} </div>
      <div> Espèce : ${resp2.species} </div>
      <div> Type : ${resp2.type} </div>
      </div>
      `
    })
    
  }
}






let saison1 = document.getElementsByTagName('input')[0]
let saison2 = document.getElementsByTagName('input')[1]
let saison3 = document.getElementsByTagName('input')[2]
let saison4 = document.getElementsByTagName('input')[3]
// console.log(saison1)
let SaisonClass1 = document.getElementsByClassName('S01')
let SaisonClass2 = document.getElementsByClassName('S02')
// console.log(SaisonClass2)
saison1.addEventListener('change' , function() {
  console.log('saison 1 check');
  for (let i=0 ; i < SaisonClass2.length ; i++ ) {
    if(this.checked) {
          SaisonClass2[i].style.display = 'none';
    } else {
      SaisonClass2[i].style.display = 'block';
    }
  }
});

saison2.addEventListener('change' , function() {
  console.log('saison 2 check');
  for (let i=0 ; i < SaisonClass1.length ; i++ ) {
    if(this.checked) {
          SaisonClass1[i].style.display = 'none';
    } else {
      SaisonClass1[i].style.display = 'block';
    }
  }
});

















































