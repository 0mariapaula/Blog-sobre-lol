// desenhar os cards dos campeões no container especificado
function desenharCampeoesCards(idContainer, arrayDeCampeoes) {
    let containerDeCampeoes = document.getElementById(idContainer);
    containerDeCampeoes.innerHTML = '';
    for (const campeao of arrayDeCampeoes) {
        containerDeCampeoes.innerHTML += `
            <div class="champion">
                <a href="detalhes.html?id=${campeao.id}">
                    <img src="imagens/${campeao.foto}" alt="${campeao.nome}">
                    <p class="champion-name">${campeao.nome}</p>
                </a>
            </div>
        `;
    }
}

// chamar a função para desenhar os cards dos campeões
desenharCampeoesCards('container-artistas', meusQueridosCampeoes);
