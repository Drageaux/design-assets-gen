import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import { PillShapeGenComponent } from './components/pill-shape-gen/pill-shape-gen.component';

@NgModule({
  declarations: [
    AppComponent,
    PillShapeGenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
