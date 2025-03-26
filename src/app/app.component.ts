import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MaterialModule } from './material-module';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [MaterialModule, RouterOutlet, RouterLink, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  http = inject(HttpClient)
}
