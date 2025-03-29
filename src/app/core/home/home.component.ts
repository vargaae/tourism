import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AsyncPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { DashboardComponent } from '../../auth/dashboard/dashboard.component';

@Component({
  selector: 'app-home',
  imports: [SharedModule, AsyncPipe, DashboardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  myControl = new FormControl('');
  options: string[] = ['Budapest', 'Gyula', 'Miskolc'];
  filteredOptions: Observable<string[]> | undefined;

  constructor() {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
