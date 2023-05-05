import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { changeBoolean } from '../main-view.actions';

@Component({
  selector: 'app-nav-side',
  templateUrl: './nav-side.component.html',
  styleUrls: ['./nav-side.component.scss'],
})
export class NavSideComponent {
  @ViewChild('sidenav') sidenav: MatSidenav | any;

  constructor(private store: Store<{ mainview: boolean }>) {
    this.store.select('mainview').subscribe((data) => {
      this.mainViewparam = data;
    });
  }

  mainViewparam: boolean = false;

  control(parameter: boolean) {
    parameter == true ? this.sidenav.open() : this.sidenav.close();
    !this.mainViewparam;
    this.store.dispatch(changeBoolean());
  }
}
