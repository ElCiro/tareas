import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarCigrComponent } from './components/navbar-cigr/navbar-cigr.component';
import { TareasCigrComponent } from './components/tareas-cigr/tareas-cigr.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarCigrComponent,
    TareasCigrComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
