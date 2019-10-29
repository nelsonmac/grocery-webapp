import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UomListComponent } from './uom-list/uom-list.component';
import { LoginComponent } from './login/login.component';
import { CreateUomComponent } from './create-uom/create-uom.component';


const routes: Routes = [
  //uom
  {path: 'uom-list', component: UomListComponent},
  {path: 'add-uom', component: CreateUomComponent},

  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
