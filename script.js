document.addEventListener('DOMContentLoaded', getDogBreeds);

function getDogBreeds() {
    const apiUrl = 'https://api.thedogapi.com/v1/breeds';
    const dogBreedsContainer = document.getElementById('dogBreeds');

    const xhr = new XMLHttpRequest();
    xhr.open('GET', apiUrl);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                data.forEach(breed => {
                    const card = document.createElement("div"); // Usamos un div para la card
                    card.classList.add("card"); // Agregamos la clase "card"

                    card.innerHTML = ` <img src="${breed.image.url}" alt="${breed.name}"><hr><h2>${breed.name}</h2>`;
                    dogBreedsContainer.appendChild(card);
                });
            } else {
                console.log('Error al obtener los datos de la API');
            }
        }
    };

    xhr.send();
}
