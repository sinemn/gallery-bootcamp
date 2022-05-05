const numItemsToGenerate = 15;
const link = "https://source.unsplash.com/collection/";
const size_width = 300;
const size_height = 300;

function getUrlPhoto() {
  fetch(
    `${link}/${Math.floor(Math.random() * 100)}/${size_width}x${size_height}`
  ).then((response) => {
    let galleryItem = document.createElement("div");
    galleryItem.classList.add("imagesRandom");
    galleryItem.innerHTML = `
        <img class="img" src="${response.url}"/>
      `;
    document.querySelector(".gallery-container").appendChild(galleryItem);
  });
}

for (let i = 0; i < numItemsToGenerate; i++) {
  getUrlPhoto();
}
