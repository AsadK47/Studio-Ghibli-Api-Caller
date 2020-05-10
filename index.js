const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

async function callApi() {
  try {
    let response = await fetch('https://ghibliapi.herokuapp.com/films');
    let data = await response.json();
    data.forEach(movie => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = movie.title;

      const paragraph = document.createElement('p');
      movie.description = movie.description.substring(0, 300);
      paragraph.textContent = `${movie.description}...`;

      container.appendChild(card);

      card.appendChild(h1);
      card.appendChild(paragraph);
    })
  } catch (error) {
    console.log(error);
  }
}

callApi();
