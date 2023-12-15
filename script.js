const body = document.body
const lightTheme = "light"
const darkTheme = "dark"
const themeKey = 'THEME_KEY'

function toggleImageSrc(refImg, isInLightMode) {

  // Se tiver light mode, adicionar a imagem light.
  refImg.setAttribute(
    "src",
    isInLightMode
      ? "/assets/Felipe_Light-Mode.png"
      : "/assets/Felipe_Dark-Mode.png"
  )

}

function changeTheme() {
  // Adiciona ou remove a classe light ao body
  body.classList.toggle(lightTheme)

  // Verifica se está no light theme ou não
  const themeValue = body.classList.contains(lightTheme)

  // Adiciona ao localStorage, o thema escolhido 
  localStorage.setItem(themeKey, themeValue ? lightTheme : darkTheme)

  // Returna qual o tema selecionado
  return themeValue
}

function ThemeProvider() {
  // Veriricar se existe a chave theme no localStorage
  const hasThemeKey = localStorage.getItem(themeKey)

  // Se for diferente de null, quer dizer que  possui valor de dark ou light então atribuir
  if(hasThemeKey) {
    // Se  for light, adicionar lightTheme no body, caso contrário, remover
    hasThemeKey === lightTheme ? body.classList.add(lightTheme) :
    body.classList.remove(lightTheme)
  } else {
    localStorage.setItem(themeKey, darkTheme)
    body.classList.remove(lightTheme)
  }
  
  // Adicionar a primeira Image
  const img = document.querySelector("#profile img")
  toggleImageSrc(img)

  const toggleButton = document.querySelector("#switch")
  // Mudar o Thema e a Imagem
  toggleButton.addEventListener("click", () => {
    // Toggle ligth class added on body
    const isInLightMode = changeTheme()

    // Toggle Img
    toggleImageSrc(img, isInLightMode)
  })
}

// Initialize the App
ThemeProvider()
