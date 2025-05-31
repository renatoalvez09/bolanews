const API_KEY = 'fa4fe0c304e2c72d0ffc5094e7f9ffaa';
const URL = `https://gnews.io/api/v4/search?q=times&lang=pt&max=5&token=${API_KEY}`;

fetch(URL)
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('noticias');
    data.articles.forEach(noticia => {
      const div = document.createElement('div');
      div.innerHTML = `<h3>${noticia.title}</h3><p>${noticia.description}</p><a href="${noticia.url}" target="_blank">Leia mais</a><hr>`;
      container.appendChild(div);
    });
  })
  .catch(err => console.error('Erro ao buscar notícias:', err));