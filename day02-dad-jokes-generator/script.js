const jokeDiv = document.getElementById('joke');
const get_joke = document.getElementById('get_joke');


const fetch_joke = () => {
  fetch('https://icanhazdadjoke.com', {
    headers: {
      "Accept": "application/json"
    }
  })
  .then(response => response.json())
  .then(joke => jokeDiv.innerText = joke.joke)
  .catch(error => console.log(error))
}

fetch_joke();

get_joke.addEventListener('click', fetch_joke);