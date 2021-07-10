export function toggleTheme() {
  const theme = localStorage.getItem("theme");
  if (!theme || theme === "light") {
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
  } else {
    localStorage.setItem("theme", "light");
    document.documentElement.classList.remove("dark");
  }
}
