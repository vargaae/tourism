import { NgModule } from '@angular/core';

import { MaterialModule } from '../material-module';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [MaterialModule, RouterLink, ReactiveFormsModule],
  exports: [MaterialModule, RouterLink, ReactiveFormsModule],
  providers: [],
})
export class SharedModule {}
