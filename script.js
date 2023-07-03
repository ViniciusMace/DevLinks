function toggleMode() {
  const html = document.documentElement

  // altera entre light e dark mode
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adiconar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk brito sorrindo, usando oculos escuro e jaqueta, sem barba e fundo rosa e azul"
    )
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk brito sorrindo, usando oculos e jaqueta, sem barba e fundo rosa e azul"
    )
  }
}
