document.addEventListener("DOMContentLoaded", function() {
    const championName = window.location.hash.substr(1); // Obtém o nome do campeão da URL

    if (championName) {
        fetch('champions.json')
            .then(response => response.json())
            .then(champions => {
                const champion = champions[championName];
                if (champion) {
                    const championDetails = document.getElementById('champion-details');
                    championDetails.innerHTML = `
                        <h2>${champion.name}</h2>
                        <img src="${champion.image}" alt="${champion.name}">
                        <p>${champion.description}</p>
                    `;
                } else {
                    console.error('Campeão não encontrado');
                }
            })
            .catch(error => console.error('Erro ao carregar dados do campeão:', error));
    } else {
        console.error('Nome do campeão não encontrado na URL');
    }
});
