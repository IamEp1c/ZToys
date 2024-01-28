import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToyListComponent } from './toy-list/toy-list.component';
import { ZToysService } from './ztoys.service';
import { HttpClientModule } from '@angular/common/http';
import { AddToyComponent } from './add-toy/add-toy.component';

@NgModule({
  declarations: [
    AppComponent,
    ToyListComponent,
    AddToyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ZToysService],
  bootstrap: [AppComponent]
})
export class AppModule { }
