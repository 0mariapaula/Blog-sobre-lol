// obter o ID do campeão da URL
const params = new URLSearchParams(window.location.search);
const idCampeao = params.get('id');

// encontrar o campeão com base no ID
const campeao = meusQueridosCampeoes.find(campeao => campeao.id == idCampeao);

// desenhar os detalhes do campeão no card especificado
function desenharDetalhesCampeao(idCard, campeao) {
    let cardDetalhe = document.getElementById(idCard);
    cardDetalhe.innerHTML = `
        <img src="imagens/${campeao.foto}" alt="${campeao.nome}">
        <div class="conteudo">
            <h3 class="titulo">${campeao.nome}</h3>
            <p class="descricao">${campeao.biografia}</p>
        </div>
        <div class="barra-botoes">
            <button class="btn-icone">
                <i class="fa fa-crosshairs"></i>
            </button>
            <button class="btn-icone">
                <i class="fa fa-car"></i>
            </button>
        </div>
    `;
}

// chamar a função para desenhar os detalhes do campeão
desenharDetalhesCampeao('cardDetalhe', campeao);
