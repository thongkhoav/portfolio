export const THEME_STORAGE_KEY = "theme";

// Runs in <head> before first paint so a saved dark theme does not flash
// light. Light is the default when nothing is saved.
export const themeInitScript = `try{if(localStorage.getItem("${THEME_STORAGE_KEY}")==="dark")document.documentElement.dataset.theme="dark"}catch(e){}`;
