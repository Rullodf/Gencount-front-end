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
    this.loadTheme('dark')
    this.body.classList.add('medium-contrast');
  }

  loadTheme(theme: 'light' | 'dark') {
    if (theme === 'dark') {
      this.body.classList.add('dark');
      this.isDarkMode = true;
    }
    else {
      this.body.classList.remove('dark');
      this.isDarkMode = false;
    }
  }

  toggleTheme() {
    const newtheme = this.isDarkMode ? 'light' : 'dark';
    this.loadTheme(newtheme);
  }
}
