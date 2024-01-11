
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/common/header/header.component';

@Component({
    standalone: true,
    selector: 'feature-1-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterModule, HeaderComponent]
})
export class AppComponent {
  title = 'feature-1';
  constructor() {   
  }
  
}
