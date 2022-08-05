import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) }, 
  { path: '', redirectTo: 'client',pathMatch:"full"}, 
  // { path: 'login', loadChildren: () => import('./securite/securite.module').then(m => m.SecuriteModule) },
  { path: "**",component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
