const fs = require('fs');

const API_KEY = 'fa4fe0c304e2c72d0ffc5094e7f9ffaa';
const URL = `https://gnews.io/api/v4/search?q=futebol&lang=pt&max=10&apikey=${API_KEY}`;

async function buscarENotificar() {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    const data = await response.json();
    fs.writeFileSync('noticias.json', JSON.stringify(data.articles, null, 2));
    console.log('✅ Notícias atualizadas e salvas em noticias.json');
  } catch (error) {
    console.error('Erro ao buscar notícias:', error.message);
  }
}

buscarENotificar();
