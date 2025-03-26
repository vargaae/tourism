import { NgModule } from '@angular/core';

import { MaterialModule } from '../material-module';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [MaterialModule, RouterLink],
  exports: [MaterialModule, RouterLink],
  providers: [],
})
export class SharedModule {}
