import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './client/_helpers/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./admin/admin.module')
  .then(m => m.AdminModule),canActivate:[AuthGuard]},
  { path: 'client', loadChildren: () => import('./client/client.module')
    .then(m => m.ClientModule) }, 
  { path: '', redirectTo: 'client',pathMatch:"full"}, 
  // { path: 'login', loadChildren: () => import('./securite/securite.module').then(m => m.SecuriteModule) },
  { path: "**",component: NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
