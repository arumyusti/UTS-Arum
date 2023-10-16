document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".container h2, ul, input, button");
    function changeStyles() {
      elements.forEach(element => {
        element.style.backgroundColor = getRandomColor();
        element.style.color = getRandomColor();
        element.textContent = getRandomText();
        element.style.fontFamily = getRandomFontFamily();
        element.style.fontSize = getRandomFontSize() + "px";
      });
    }
    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
    function getRandomPosition() {
      return Math.floor(Math.random() * 300); 
    }
  
    function getRandomText() {
      const texts = ["Hello", "LISA", "JENNIE", "JISOO", "ROSE", "BLACKPINK", ];
      return texts[Math.floor(Math.random() * texts.length)];
    }
  
    function getRandomFontFamily() {
      const fonts = ["Arial", "Helvetica", "Verdana", "Georgia", "Times New Roman"];
      return fonts[Math.floor(Math.random() * fonts.length)];
    }
  
    function getRandomFontSize() {
      return Math.floor(Math.random() * 20) + 12;
    }
  
    const buttons = document.querySelectorAll("#bt");
    buttons.forEach(button => {
      button.addEventListener("click", changeStyles);
    });
  });