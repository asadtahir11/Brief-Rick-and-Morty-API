let url = "https://rickandmortyapi.com/api/location?page=2";
//fetch().then().then()
fetch(url)

.then((resp)=>{
    return resp.json()
})
.then((data)=>{
    console.log(data);
    let container = document.querySelector('main');
    console.log(container);
    for (let i = 0; i < data.results.length;i++){
        console.log(i);
        container.innerHTML += `
        <h2 class = "recup">${data.results[i].name}</h2>
        <div class="recup2">
        <h4>${data.results[i].type}</h4>
        <h4>${data.results[i].dimension}</h4>
        <h4>${data.results[i].type}</h4>
       
        <div class='affichage-perso'></div>
        </div>
        ` 
    }
//     let click = document.querySelector('.recup');
// click.addEventListener('click', (event)=> {
//     console.log(event.target.nextElementSibling);
//     let recup2 = document.querySelector(".recup2");
//     event.target.nextElementSibling.style.display = 'block';
// });
        let click = document.querySelectorAll('h2');
        let recup2Div = document.querySelectorAll('.recup2');
        
        for (let index = 0; index < click.length; index++) {
            const element = click[index];
            // console.log(element);
            element.addEventListener('click', function (event) {
                console.log('event', event.target.nextElementSibling.querySelector('.affichage-perso'));
                let divAffichagePerso = event.target.nextElementSibling.querySelector('.affichage-perso');
                // this.classlist.toggle('active');
                console.log(data.results[index].residents)
                let listUriCharacter = data.results[index].residents;
                let recup2 = recup2Div[index];
                console.log(recup2);

                for (const uri of listUriCharacter) {
                    fetch(uri).then((resp)=> {
                      return resp.json()
                    }).then((resp2)=> {
                      console.log(resp2.image)
                     
                      divAffichagePerso.innerHTML += 
                      `<img src="${resp2.image}">
                      <span> ${resp2.name} </span>`
                    })
                  }
                recup2.style.display = 'block';
                console.log(event.target);
                // if (recup2.style.display == 'none') {
                //     recup2.style.display = 'block'
                // } else {recup2.style.display == 'none'}
                recup2.addEventListener('click', function (event) {
                    console.log(event,'test');
                    event.path[1].style.display = 'none';
                })

            })
        }

})





