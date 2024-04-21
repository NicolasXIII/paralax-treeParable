import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LongCardTextImgORImgTextComponent } from './components/long-card-text-img-or-img-text/long-card-text-img-or-img-text.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrySNAPComponent } from './components/try-snap/try-snap.component';
import { BubblyButtonComponent } from './components/bubbly-button/bubbly-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LongCardTextImgORImgTextComponent,
    FormularioComponent,
    TrySNAPComponent,
    BubblyButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
