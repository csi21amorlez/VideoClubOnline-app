import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PeliculasModule } from './Modules/peliculas/peliculas.module';
import { SeriesModule } from './Modules/series/series.module';


const routes: Routes = [

  //Ruta vacia
  {path:'', component:HomeComponent},
  {path:'Peliculas', loadChildren: () => import ('./Modules/peliculas/peliculas.module').then( m => m.PeliculasModule)},
  {path:'Series', loadChildren:() => import ('./Modules/series/series.module').then(s => s.SeriesModule)},
  {path:'**', redirectTo:'/', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
