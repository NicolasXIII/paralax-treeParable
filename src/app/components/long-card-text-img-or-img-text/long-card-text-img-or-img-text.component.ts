import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-long-card-text-img-or-img-text',
  templateUrl: './long-card-text-img-or-img-text.component.html',
  styleUrl: './long-card-text-img-or-img-text.component.scss'
})
export class LongCardTextImgORImgTextComponent {

  @Input() longCards !: any[];


}
