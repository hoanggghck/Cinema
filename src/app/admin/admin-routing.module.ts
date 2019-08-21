import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutAdminComponent } from './layout-admin.component';
import { LoginAdminGuard } from '../share/Guard/login-admin.guard';


const adminRoutes: Routes = [{
  path: '', component: LayoutAdminComponent, canActivate: [LoginAdminGuard]
},
{
  path: '**', redirectTo: '', pathMatch: 'full'
}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
