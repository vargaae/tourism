import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import {MatButtonModule} from '@angular/material/button';
// import {MatIconModule} from '@angular/material/icon';
// import { MatTabsModule } from '@angular/material/tabs';
import { MaterialModule } from './material-module';

@Component({
  selector: 'app-root',
  imports: [MaterialModule, RouterOutlet, RouterLink, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tourism';
}
