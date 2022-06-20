const API_KEY = 'api_key=47ee4bf29736e2084d7b3eae42e793c7';
const BASE_URL = 'https://api.themoviedb.org/3/';
let apiPopularMoviesUrl = BASE_URL + 'movie/popular?' + API_KEY + '&language=pt-BR';
let apiUpcomingMoviesUrl = BASE_URL + 'movie/upcoming?' + API_KEY + '&language=pt-BR';
let apiNowPlayingMoviesUrl = BASE_URL + 'movie/now_playing?' + API_KEY + '&language=pt-BR'; 

function showPopularMovies(){
    let sectionTela = document.getElementById('popular-movies-section');
    let texto = '';

    let dados = JSON.parse(this.responseText);
    localStorage.setItem('db_popularMovies', this.responseText);

    for(i = 0; i<dados.results.length; i++){
        let filme = dados.results[i];
        let data = filme.release_date;
        texto = texto + `
        <div class="box-cartaz">
            <a href = "detalhes.html?id=${filme.id}">
                <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" alt="">
            </a>
            <span class="titulo"><b>${filme.original_title}</b></span>
            <span class="data">"<br><b>Data de Lançamento: </b>${data}"</span>
            <span class="popularidade"><br><b>Ordem de popularidade: </b>${filme.popularity}</span>
            <span class="avaliacao"><br><b>Avaliação: </b>${filme.vote_average}<br></span>
            <a href="detalhes.html?id=${filme.id}">
                <input type="button" id="botao-saiba-mais" value="Saiba Mais"> 
            </a>
        </div>
        `;
    }

    sectionTela.innerHTML = texto;
}

function showUpcomingMovies(){
    let sectionTela = document.getElementById('upcoming-movies-section');
    let texto = '';

    let dados = JSON.parse(this.responseText);
    localStorage.setItem('db_upcomingMovies', this.responseText);

    for(i = 0; i<dados.results.length; i++){
        let filme = dados.results[i];
        let data = filme.release_date;
        texto = texto + `
        <div class="box-cartaz">
            <a href = "detalhes.html">
                <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" alt="">
            </a>
            <span class="titulo">${filme.original_title}</span>
            <span class="data">"<br><b>Data de Lançamento: </b>${data}"</span>
            <span class="popularidade"><br><b>Ordem de popularidade: </b>${filme.popularity}</span>
            <span class="avaliacao"><br><b>Avaliação: </b>${filme.vote_average}<br></span>
            <a href="detalhes.html">
                <input type="button" id="botao-saiba-mais" value="Saiba Mais"> 
            </a>
        </div>
        `;
    }

    sectionTela.innerHTML = texto;
}

function showNowPlayingMovies(){
    let sectionTela = document.getElementById('now-playing-movies-section');
    let texto = '';

    let dados = JSON.parse(this.responseText);
    localStorage.setItem('db_nowPlaying', this.responseText);

    for(i = 0; i<dados.results.length; i++){
        let filme = dados.results[i];
        let data = filme.release_date;
        texto = texto + `
        <div class="box-cartaz">
            <a href = "detalhes.html">
                <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" alt="">
            </a>
            <span class="titulo"><b>${filme.original_title}</b></span>
            <span class="data">"<br><b>Data de Lançamento: </b>${data}"</span>
            <span class="popularidade"><br><b>Ordem de popularidade: </b>${filme.popularity}</span>
            <span class="avaliacao"><br><b>Avaliação: </b>${filme.vote_average}<br></span>
            <a href="detalhes.html">
                <input type="button" id="botao-saiba-mais" value="Saiba Mais"> 
            </a>
        </div>
        `;
    }

    sectionTela.innerHTML = texto;
}

function getMovies(url){
    let xhr = new XMLHttpRequest();

    if(url ===  apiPopularMoviesUrl){
        xhr.onload = showPopularMovies;
    }
    else if(url === apiUpcomingMoviesUrl){
        xhr.onload = showUpcomingMovies;
    }
    else if(url === apiNowPlayingMoviesUrl){
        xhr.onload = showNowPlayingMovies;
    }
    else{
        alert('url inválida!');
    }

    xhr.open('GET', url, false);
    xhr.send();
}

getMovies(apiPopularMoviesUrl);
getMovies(apiUpcomingMoviesUrl);
getMovies(apiNowPlayingMoviesUrl);