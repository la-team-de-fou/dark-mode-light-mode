const lightBtn = document.getElementById('light-btn');
const darkBtn = document.getElementById('dark-btn');

function getSavedTheme() {
  try {
    return localStorage.getItem('theme');
  } catch (e) {
    console.warn('localStorage unavailable:', e);
    return null;
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem('theme', theme);
  } catch (e) {
    console.warn('localStorage unavailable:', e);
  }
}

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  lightBtn.classList.toggle('active', theme === 'light');
  darkBtn.classList.toggle('active', theme === 'dark');
}

// Initialize theme: localStorage > system > default
const initialTheme = getSavedTheme() || getSystemTheme();
applyTheme(initialTheme);

lightBtn.addEventListener('click', () => {
  applyTheme('light');
  saveTheme('light');
});

darkBtn.addEventListener('click', () => {
  applyTheme('dark');
  saveTheme('dark');
});