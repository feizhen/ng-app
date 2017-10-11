import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { 
  MdCardModule,
  MdGridListModule,
  MdInputModule,
  MdCheckboxModule,
  MdButtonModule,
  MatProgressSpinnerModule
} from '@angular/material';

import { CoreModule } from './core/core.module';
import { MainModule } from './main/main.module';
import { AppRoutingModule } from './app-router.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    CoreModule,
    MainModule,
    AppRoutingModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
