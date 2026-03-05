import { Component } from '@angular/core';

@Component({
  selector: 'remove-button',
  template: `<button (click)="removeFromCount()">rimuovi</button>`,
  styles: ``,
})export class removeButton{

  protected removeFromCount() {

  }
}
