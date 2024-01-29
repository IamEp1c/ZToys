import { Component } from '@angular/core';
import { ToyListComponent } from './toy-list/toy-list.component';
import { ZToysService } from './ztoys.service';
import { ZToys } from './ZToys';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Zayan ToyBox';


}
