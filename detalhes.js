const API_KEY = 'api_key=47ee4bf29736e2084d7b3eae42e793c7';
const BASE_URL = 'https://api.themoviedb.org/3/';

const params = new URLSearchParams(location.search);
let id = params.get('id');

let apiUrl = BASE_URL + 'movie/' + id + '?' + API_KEY + '&language=pt-BR';

function showMovie(){
    let sectionTela = document.getElementById('detalhe-filmes-section');
    let texto = '';

    let dados = JSON.parse(this.responseText);

    let data = dados.release_date;

    texto = texto + `
    <div class="box-cartaz">
        <img src="https://image.tmdb.org/t/p/w500${dados.poster_path}" alt="">
        <span class="titulo"><b>${dados.original_title}</b></span>
        <span class="data">"<br><b>Data de Lançamento: </b>${data}"</span>
        <span class="popularidade"><br><b>Ordem de popularidade: </b>${dados.popularity}</span>
        <span class="avaliacao"><br><b>Avaliação: </b>${dados.vote_average}<br></span>
    </div>
    `;

    sectionTela.innerHTML = texto;
}


function getMovies(url){
    let xhr = new XMLHttpRequest();

    xhr.onload = showMovie;
    xhr.open('GET', url, false);
    xhr.send();
}

getMovies(apiUrl);