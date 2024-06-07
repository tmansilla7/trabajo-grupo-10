const JSON_SERIES = localStorage.getItem(LOCAL_STORAGE_SERIES)
const SERIES = JSON.parse(JSON_SERIES) //Para que el JSON vuelva a ser un objeto

function agregarSeries() {
  let nodo_section = document.querySelector(".sermov");

  for (let i in SERIES) {
    let nodo_article = document.createElement("article");
    nodo_article.classList.add("frame")
    let nodo_a = document.createElement("a");
    nodo_a.href = `./serie.html?indice=${i}`;
    let nodo_img = document.createElement("img")
    nodo_img.src = SERIES[i]['imagen']['src']
    nodo_img.alt = SERIES[i]['imagen']['alt']
    let nodo_h3 = document.createElement("h3")
    nodo_h3.textContent = SERIES[i]['titulo']
    nodo_a.appendChild(nodo_img)
    nodo_a.appendChild(nodo_h3);
    nodo_article.appendChild(nodo_a);
    nodo_section.appendChild(nodo_article);
  }
}

agregarSeries();