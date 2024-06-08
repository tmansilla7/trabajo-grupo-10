const JSON_SERIES_Y_PELICULAS = localStorage.getItem(LOCAL_STORAGE_SERIES_Y_PELICULAS)
const SERIES_Y_PELICULAS = JSON.parse(JSON_SERIES_Y_PELICULAS) 

function agregarSeriesYPeliculas() {
  let nodo_section = document.querySelector(".sermov");

  for (let i in SERIES_Y_PELICULAS) {
    let nodo_article = document.createElement("article");
    nodo_article.classList.add("frame")
    let nodo_a = document.createElement("a");
    nodo_a.href = `./serie.html?indice=${i}`;
    let nodo_img = document.createElement("img")
    nodo_img.src = SERIES_Y_PELICULAS[i]['imagen']['src']
    nodo_img.alt = SERIES_Y_PELICULAS[i]['imagen']['alt']
    let nodo_h3 = document.createElement("h3")
    nodo_h3.textContent = SERIES_Y_PELICULAS[i]['titulo']
    nodo_a.appendChild(nodo_img)
    nodo_a.appendChild(nodo_h3);
    nodo_article.appendChild(nodo_a);
    nodo_section.appendChild(nodo_article);
  }
}

agregarSeriesYPeliculas();