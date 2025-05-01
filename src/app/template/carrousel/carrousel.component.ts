import { Component } from '@angular/core';
import { ItemCarrosel1Component } from '../../components/item-carrosel-1/item-carrosel-1.component';
import { ItemCarrosel2Component } from '../../components/item-carrosel-2/item-carrosel-2.component';
import { ItemCarrosel3Component } from '../../components/item-carrosel-3/item-carrosel-3.component';

@Component({
  selector: 'app-carrousel',
  imports: [
    ItemCarrosel1Component,
    ItemCarrosel2Component,
    ItemCarrosel3Component
  ],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css'
})
export class CarrouselComponent {

}
