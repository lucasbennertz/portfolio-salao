import { Component } from '@angular/core';
import { HeaderComponent } from '../../template/header/header.component';
import { CarrouselComponent } from '../../template/carrousel/carrousel.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    CarrouselComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
