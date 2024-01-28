import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [//metemos las rutas personajes y personajas por su id
{
  path: 'home', 
  component: HomeComponent
},
{
  path: 'character/:id',
  component: DetalleComponent
},
{
  path: '',
  redirectTo: 'home', 
  pathMatch: 'full'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
