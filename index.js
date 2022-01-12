fetch('csvjson.json')
.then(res => res.json())
.then(json => {
const cards = document.getElementById('cards');
json.forEach(element => {
    cards.innerHTML += `
    <div class="bg card my-4 mx-auto" style="">
    <div class=" card-body">
    <p class="card-text my-1">Rank: ${element['Rank']}</p>
      <h5 class="card-title my-2">${element['Institute']}</h5>
      <p class="card-text my-1">City: ${element['City']}</p>
      <p class="card-text my-1">State/UT: ${element['State']}</p>

    </div>
  </div>
  `
});
});

const search = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click',()=>{
    
}) 
search.addEventListener('input',()=>{

    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('card');


    Array.from(noteCards).forEach(function(element){
        let name = element.getElementsByTagName("h5")[0];
        let other = element.getElementsByTagName('p');
        if(name.innerText.toLowerCase().includes(inputVal) || other[0].innerText.toLowerCase().includes(inputVal) || other[1].innerText.toLowerCase().includes(inputVal) || other[2].innerText.toLowerCase().includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })


});
