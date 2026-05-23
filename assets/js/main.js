(function () {
  var storageKey = "theme-preference";
  var toggle = document.getElementById("theme-toggle");
  var yearNode = document.getElementById("year");

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    if (toggle) {
      toggle.textContent = theme === "dark" ? "☀️ 浅色" : "🌙 深色";
    }
  }

  function resolveInitialTheme() {
    var saved = localStorage.getItem(storageKey);
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  applyTheme(resolveInitialTheme());

  if (toggle) {
    toggle.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme") || "light";
      var next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      localStorage.setItem(storageKey, next);
    });
  }

  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }
})();
