import {DOCUMENT, Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkMode = false;
  private themeLink: HTMLLinkElement;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.themeLink = this.document.createElement('link');
    this.themeLink.rel = 'stylesheet';
    this.document.querySelector("head>:nth-child(1)")?.before(this.themeLink);

    this.loadTheme('light')
  }

  loadTheme(theme: 'light' | 'dark') {
    this.themeLink.href = `themes/${theme}.css`;
    this.isDarkMode = (theme === 'dark') ;
  }

  toggleTheme() {
    const newtheme = this.isDarkMode ? 'light' : 'dark';
    this.loadTheme(newtheme);
  }
}
