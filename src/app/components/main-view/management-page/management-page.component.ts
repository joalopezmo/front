import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeBoolean } from '../main-view.actions';

@Component({
  selector: 'app-management-page',
  templateUrl: './management-page.component.html',
  styleUrls: ['./management-page.component.scss'],
})
export class ManagementPageComponent {
  booleanControl = false;

  constructor(private store: Store<{ mainView: boolean }>) {
    this.store.select('mainView').subscribe((data) => {
      this.booleanControl = data;
    });
  }

  control(data: boolean) {
    this.store.dispatch(changeBoolean());
    this.booleanControl = data;
  }
}
