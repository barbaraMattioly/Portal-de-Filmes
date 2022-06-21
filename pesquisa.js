const API_KEY = 'api_key=47ee4bf29736e2084d7b3eae42e793c7';
const BASE_URL = 'https://api.themoviedb.org/3/';

function exibeResultados(){
    let sectionTelaPesquisa = document.getElementById('pagina-pesquisa');
    let textoPesquisa = '';

    let dadosPesquisa = JSON.parse(this.responseText);

    if(dadosPesquisa.results.length === 0){
        textoPesquisa = textoPesquisa + `
            <div class="itens-pesquisados">
                <p>Não foram encontrado resultados para a pesquisa feita!</p>
            </div>
        `;        
    }
    else{
        for(i = 0; i<dadosPesquisa.results.length; i++){
            let retornoPesquisa = dadosPesquisa.results[i];
            let data = retornoPesquisa.release_date;
            textoPesquisa = textoPesquisa + `
            <div class="box-cartaz">
                    <a href="detalhes.html?id=${retornoPesquisa.id}">
                        <img src="https://image.tmdb.org/t/p/w500${retornoPesquisa.poster_path}" alt="">
                    </a>
                    <span class="titulo"><b>${retornoPesquisa.original_title}</b></span>
                    <span class="data">"<br><b>Data de Lançamento: </b>${data}"</span>
                    <span class="popularidade"><br><b>Ordem de popularidade: </b>${retornoPesquisa.popularity}</span>
                    <span class="avaliacao"><br><b>Avaliação: </b>${retornoPesquisa.vote_average}<br></span>
            </div>
            `;
        }
    }

    sectionTelaPesquisa.innerHTML = textoPesquisa;
}

function exibeErro(){
    alert('Houve um erro com a requisição');
}

function executarPesquisa(){
    let query = document.getElementById('textoPesquisa').value;

    let xhr = new XMLHttpRequest();
    xhr.onload = exibeResultados;
    xhr.onerror = exibeErro;
    xhr.open('GET', `${BASE_URL}search/movie?${API_KEY}&language=pt-BR&query=${query}`, false);
    xhr.send();
}

document.getElementById('btnPesquisa').addEventListener('click',executarPesquisa);