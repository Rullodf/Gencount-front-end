import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ThemeService} from '../services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styles: `
    div{
        background-color: var(--md-sys-color-primary);
    }
  `
})
export class App {
  constructor(private themeService: ThemeService) {
  }
  protected readonly title = signal('Gencount');
}
