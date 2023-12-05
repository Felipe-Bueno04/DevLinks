function WebSite_theme(){
  const html = document.documentElement;

  html.classList.toggle('light');

  // Pegar a tag img
  const img = document.querySelector("#profile img");

  // Condição para substituir a imagem de perfil.
  if(html.classList.contains('light')) {
    // Se tiver light mode, adicionar a imagem light.
    img.setAttribute('src', './assets/avatar-light.png');
  } else {
    // Se tiver dark mode, manter a imagem normal.
    img.setAttribute('src', './assets/avatar.png');
  }
}