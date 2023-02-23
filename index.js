const pokemon = [
  {
    id: 1,
    name: "bulbasaur",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    likes: 4,
  },
  {
    id: 2,
    name: "ivysaur",
    img: "https://images.cults3d.com/6VgkTLM1j-CTAMhEJTtsRV1z6N8=/516x516/https://files.cults3d.com/uploaders/14845535/illustration-file/5d09c257-51ed-4d65-aa36-3f9201af34c4/ivysaur.png",
    likes: 21,
  },
  {
    id: 3,
    name: "venusaur",
    img: "https://images.saymedia-content.com/.image/t_share/MTc2MjYwODQ5NTk2NTcyODYy/pokemon-venusaur-nicknames.png",
    likes: 7,
  },
  {
    id: 4,
    name: "charmander",
    img: "https://pixy.org/download/1207107/",
    likes: 20,
  },
  {
    id: 5,
    name: "charmeleon",
    img: "https://static.pokemonpets.com/images/monsters-images-800-800/5-Charmeleon.webp",
    likes: 11,
  },
];

const pokeContainer = document.querySelector("#poke-container");
const pokeForm = document.querySelector("#poke-form"); //stores the value of the form 

pokeForm.addEventListener("submit", (e) => { //added an event listener to the submit button
  e.preventDefault()

  const name = document.getElementById('name-input').value 
  const image = document.getElementById('img-input').value
  
  //create a pokemon object and append it to the array using push() method
  const newPokemon = {
    id: pokemon.length +1,
    name: name,
    img: image, 
    likes: 0 
  }
  pokemon.push(newPokemon)
  renderPokemon(newPokemon)

  pokeForm.reset() //clears the values after we reset 
})

// for each object element in the pokemon array of objects we call 
//render pokemon and we pass in one pokemon object at a time as the argument 
pokemon.forEach(function (character) { //in this case character is an argument
  renderPokemon(character);
});

function renderPokemon(char) { //char is a parameter
  const pokeCard = document.createElement("div");
  pokeCard.className = "poke-card";
  // created a div and gave it a class name pokecard

  const pokeImg = document.createElement("img");
  pokeImg.src = char.img; // setting the img.src to character image 
  pokeImg.alt = `${char.name} image`;
// creates an image element 
  const pokeName = document.createElement("h3"); //creates a header h3 for the pokemon cards
  pokeName.textContent = char.name; //makes the text the name of the pokemon for the h3 we created 

  const pokeLikes = document.createElement("h3"); //create another element thats a h3 to 
  pokeLikes.textContent = "Likes: ";

  const likesNum = document.createElement("h5");// created a h5 header for likes 
  likesNum.className = "likes-num";
  likesNum.textContent = char.likes;

  const likesBttn = document.createElement("button");
  likesBttn.className = "like-bttn";
  likesBttn.textContent = "♥";
  
  likesBttn.addEventListener("click", () => { //callback wont be invoked until we click
    ++char.likes
    likesNum.textContent = char.likes; //when we do click we see that it increments dynamically
  })

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-bttn";
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", () => { // added an event listener to the click event to the delete button 
    pokeCard.remove() // we created the div with the class name pokeCard starting in line 44

  })

  pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, likesBttn, deleteBtn); //append each element to the card
  pokeContainer.appendChild(pokeCard); 
}

