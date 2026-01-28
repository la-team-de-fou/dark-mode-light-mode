class ThemeToggle {
  constructor() {
    this.theme = localStorage.getItem("theme") || "light";
    this.lightBtn = document.getElementById('light-btn');
    this.darkBtn = document.getElementById('dark-btn');
    this.init();
  }

  init() {
    this.applyTheme(this.theme);

    if (this.lightBtn) {
      this.lightBtn.addEventListener('click', () => this.setTheme('light'));
    }

    if (this.darkBtn) {
      this.darkBtn.addEventListener('click', () => this.setTheme('dark'));
    }

    this.updateButtonStates();
  }

  setTheme(theme) {
    this.theme = theme;
    this.applyTheme(theme);
    localStorage.setItem('theme', theme);
    this.updateButtonStates();
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  updateButtonStates() {
    if (this.lightBtn) {
      this.lightBtn.classList.toggle('active', this.theme === 'light');
      this.lightBtn.setAttribute('aria-pressed', this.theme === 'light');
    }
    if (this.darkBtn) {
      this.darkBtn.classList.toggle('active', this.theme === 'dark');
      this.darkBtn.setAttribute('aria-pressed', this.theme === 'dark');
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ThemeToggle();
});