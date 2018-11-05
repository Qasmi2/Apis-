import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SandboxComponent } from './components/sandbox/sandbox.component';
import { DataserviceService } from './services/dataservice.service';
import { ObserverService } from './services/observer.service';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent,
    HomeComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [DataserviceService, ObserverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
