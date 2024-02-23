// obter o ID do campeão da URL
const params = new URLSearchParams(window.location.search);
const idCampeao = params.get('id');

// encontrar o campeão com base no ID
const campeaoDetalhado = meusQueridosCampeoes.find(campeao => campeao.id === idCampeao);

// desenhar os detalhes do campeão na página
function desenharDetalhesCampeao(campeao) {
    const championImage = document.getElementById('champion-image');
    const championName = document.getElementById('champion-name');
    const championDescription = document.getElementById('champion-description');

    championImage.src = `imagens/${campeao.foto}`;
    championName.textContent = campeao.nome;
    championDescription.textContent = campeao.biografia;
}

// chamar a função para desenhar os detalhes do campeão
desenharDetalhesCampeao(campeao);
console.log(campeao);
