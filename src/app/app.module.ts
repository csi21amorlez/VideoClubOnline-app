import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeriesComponent } from './Views/Components/series/series.component';
import { PeliculasComponent } from './Views/Components/peliculas/peliculas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire/compat'
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
    PeliculasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    /*provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
