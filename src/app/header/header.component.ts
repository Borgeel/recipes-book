import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() targetLink = new EventEmitter<string>();

  onSelect(target: string) {
    this.targetLink.emit(target);
  }
}
