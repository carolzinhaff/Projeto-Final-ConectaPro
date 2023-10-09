// Obtém os botões de zoom
const zoomInButton = document.getElementById("zoom-in-button");
const zoomOutButton = document.getElementById("zoom-out-button");

// Adiciona um ouvinte de eventos de clique para o botão de zoom +
zoomInButton.addEventListener("click", () => {
  // Obtém o elemento HTML raiz (geralmente <html>) para aplicar o zoom
  const htmlElement = document.documentElement;

  // Define o tamanho da fonte para 125% do tamanho atual
  const currentSize = window.getComputedStyle(htmlElement, null).getPropertyValue('font-size');
  const newSize = (parseFloat(currentSize) * 1.25) + 'px';

  // Aplica o zoom aumentando o tamanho da fonte
  htmlElement.style.fontSize = newSize;
});

// Adiciona um ouvinte de eventos de clique para o botão de zoom -
zoomOutButton.addEventListener("click", () => {
  // Obtém o elemento HTML raiz (geralmente <html>) para aplicar o zoom
  const htmlElement = document.documentElement;

  // Define o tamanho da fonte para 75% do tamanho atual
  const currentSize = window.getComputedStyle(htmlElement, null).getPropertyValue('font-size');
  const newSize = (parseFloat(currentSize) * 0.75) + 'px';

  // Aplica o zoom diminuindo o tamanho da fonte
  htmlElement.style.fontSize = newSize;
});
