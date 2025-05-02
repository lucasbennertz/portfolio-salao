import { Component } from '@angular/core';
import { HeaderComponent } from '../../template/header/header.component';
import { CarrouselComponent } from '../../template/carrousel/carrousel.component';
import { HairStylesComponent } from '../../template/hair-styles/hair-styles.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    CarrouselComponent,
    HairStylesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
