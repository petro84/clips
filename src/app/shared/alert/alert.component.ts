import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [NgClass],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  color = input('blue')

  get bgColor() {
    if (this.color() === 'red') {
      return 'bg-red-400';
    } else if (this.color() === 'green') {
      return 'bg-green-400';
    } else {
      return 'bg-blue-400';
    }
  }
}
