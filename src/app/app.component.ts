import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from './core/navbar/navbar.component';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  imports: [SharedModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  http = inject(HttpClient);
}
