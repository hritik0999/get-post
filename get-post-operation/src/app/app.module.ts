import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Reducer } from './Reducer/reducer';
import { UserEffects } from './effect/effect';
import { DisplayComponent } from './display/display.component';
import { MainComponent } from './main/main.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    MainComponent,
    AddComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({users:Reducer}),
    HttpClientModule,
    EffectsModule.forRoot([UserEffects]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
