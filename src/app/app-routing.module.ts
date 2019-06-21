import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';




const routes: Routes = [
  {path:"",  redirectTo:"usuarios", pathMatch:"full"},
  {path:"login", component: LoginComponent},
  {path:"menu", component: MenuComponent},
  {path:"usuarios", component: UsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
