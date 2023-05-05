import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { IntroComponent } from './components/intro/intro.component';
import { FooterComponent } from './components/main-view/footer/footer.component';
import { HeaderComponent } from './components/main-view/header/header.component';
import { mainViewReducer } from './components/main-view/main-view.reducer';
import { ManagementPageComponent } from './components/main-view/management-page/management-page.component';
import { NavSideComponent } from './components/main-view/nav-side/nav-side.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    FrontPageComponent,
    ManagementPageComponent,
    AuthComponent,
    RegisterComponent,
    NavSideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    StoreModule.forRoot({ mainView: mainViewReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
