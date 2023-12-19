function insert(num) {
  var number = document.getElementById("result").innerHTML;
  document.getElementById("result").innerHTML = number + num;
}

function clean() {
  document.getElementById("result").innerHTML = "";
}

function back() {
  var result = document.getElementById("result").innerHTML;
  document.getElementById("result").innerHTML = result.substring(
    0,
    result.length - 1
  );
}

function calculate() {
  var result = document.getElementById("result").innerHTML;
  if (result) {
    document.getElementById("result").innerHTML = eval(result);
  } else {
    document.getElementById("result").innerHTML = ":)";
  }
}

// dark/ light mode
document.addEventListener("DOMContentLoaded", function () {
  const htmlElement = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");

  // Verifica o tema atual no carregamento da página
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    htmlElement.setAttribute("data-theme", currentTheme);
    applyThemeStyles(currentTheme);
  }

  // Adiciona um ouvinte de evento ao botão de alternar tema
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const currentTheme = htmlElement.getAttribute("data-theme");
      const newTheme = currentTheme === "light" ? "dark" : "light";

      htmlElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);

      applyThemeStyles(newTheme);
    });
  }

  function applyThemeStyles(theme) {
    const styleSheetLink = document.getElementById("theme-stylesheet");

    if (styleSheetLink) {
      styleSheetLink.href = `/path/to/${theme}-theme.css`; // Substitua pelo caminho real do seu arquivo CSS de tema
    }
  }
});
