import {OnInit, ChangeDetectionStrategy, Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from '../../auth/dashboard/dashboard.component';

@Component({
  selector: 'app-hotel-list',
  imports: [SharedModule, DashboardComponent,     FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,],
  templateUrl: './hotel-list.component.html',
  styleUrl: './hotel-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotelListComponent implements OnInit {
  myControl = new FormControl('');
  options: string[] = ['City One', 'City Two', 'City Three'];
  filteredOptions: Observable<string[]> | undefined;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
