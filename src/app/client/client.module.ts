import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { CardComponent } from './components/card/card.component';
import { AsideComponent } from './components/aside/aside.component';
import { LayoutModule } from '../layout/layout.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';


@NgModule({
  declarations: [
    CardComponent,
    AsideComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    LayoutModule,
    RouterModule
  ]
})
export class ClientModule { }
