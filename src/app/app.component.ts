import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  targettedLink: string = '';

  onSelect(target: string) {
    this.targettedLink = target;
  }
}
