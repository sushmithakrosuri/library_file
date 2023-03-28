
import { FileModule } from './../../projects/file/src/lib/file.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { FileComponent } from 'projects/file/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    //FileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
