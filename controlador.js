import { meusQueridosCampeoes } from './objetos.js';
// desenhar os cards dos artistas no container especificado
function desenharArtistasCards(idContainer, arrayDeArtistas) {
    let containerDeArtistas = document.getElementById(idContainer);
    containerDeArtistas.innerHTML = '';
    for (const artista of arrayDeArtistas) {
        containerDeArtistas.innerHTML += `
            <div class="artista">
                <img src="img/${artista.foto}" alt="${artista.nome}">
                <div class="conteudo">
                    <h3 class="titulo"><a href='detalhes.html?id=${artista.id}'>${artista.nome}</a></h3>
                    <p class="descricao">${artista.biografia}</p>
                </div>
                <div class="barra-botoes">
                    <button class="btn-icone">
                        <i class="fa fa-crosshairs"></i>
                    </button>
                    <button class="btn-icone">
                        <i class="fa fa-car"></i>
                    </button>
                </div>
            </div>
        `;
    }
}

// Chame a função para desenhar os cards dos artistas
desenharArtistasCards('container-artistas', meusQueridosArtistas);
