function addPet() {
    const name = document.getElementById('petName').value;
    const image = document.getElementById('petImage').value;
    const phone = document.getElementById('phoneNumber').value;

    if(name && image && phone) {
        const petList = document.getElementById('pet-list');
        const petCard = document.createElement('div');
        petCard.className = 'pet-card';
        petCard.innerHTML = `
            <img src="${image}" alt="${name}">
            <h3>${name}</h3>
            <button onclick="alert('Telefone para contato: ${phone}')">Adotar</button>
        `;
        petList.appendChild(petCard);

        document.getElementById('petName').value = '';
        document.getElementById('petImage').value = '';
        document.getElementById('phoneNumber').value = '';
    } else {
        alert('Preencha todos os campos antes de adicionar um pet!');
    }
}
