fetch('noticias.json')
  .then(res => res.json())
  .then(noticias => {
    const container = document.getElementById('noticias-container');
    noticias.forEach(noticia => {
      container.innerHTML += `
        <div class="noticia">
          <img src="${noticia.image || 'https://via.placeholder.com/600x300'}" alt="">
          <h2>${noticia.title}</h2>
          <p>${noticia.description || ''}</p>
          <a href="${noticia.url}" target="_blank">Ler mais</a>
        </div>
      `;
    });
  });
