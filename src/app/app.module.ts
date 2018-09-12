import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
// import {PopupModule} from 'ng2-opd-popup';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MainPageComponent,
    DialogComponent,
    ProjectDetailComponent,
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule ,
  HttpClientModule],
  entryComponents: [DialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
