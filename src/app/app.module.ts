import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FlyInComponent } from './FlyIn/FlyIn.component';
import { FadeInComponent } from './FadeIn/FadeIn.component';

@NgModule({
  declarations: [
    AppComponent,
    FlyInComponent,
    FadeInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
