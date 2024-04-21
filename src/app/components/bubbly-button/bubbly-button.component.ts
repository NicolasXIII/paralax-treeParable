import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bubbly-button',
  templateUrl: './bubbly-button.component.html',
  styleUrl: './bubbly-button.component.scss'
})
export class BubblyButtonComponent {

  @Input() textoBoton: string = '';

  animateButton(event: MouseEvent): void {
    const target = event.target as HTMLElement;

    //reset animation
    target.classList.remove('animate');
    target.classList.add('animate');

    setTimeout(() => {
      target.classList.remove('animate');
    }, 700);
  }

}
