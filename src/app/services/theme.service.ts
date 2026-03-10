import {DOCUMENT, Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkMode = false;
  private body: HTMLElement;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.body = this.document.body;
    if(localStorage.getItem('theme') === 'dark'){
      this.loadTheme('dark');
    } else{
      this.loadTheme('light');
    }
    this.body.classList.add('medium-contrast');
  }

  loadTheme(theme: 'light' | 'dark') {
    if (theme === 'dark') {
      this.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      this.isDarkMode = true;
    }
    else {
      this.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      this.isDarkMode = false;
    }
  }

  toggleTheme() {
    const newtheme = this.isDarkMode ? 'light' : 'dark';
    this.loadTheme(newtheme);
  }

  isDark() : boolean {
    return this.isDarkMode;
  }
}
