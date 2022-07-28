import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { CardComponent } from './components/card/card.component';
import { AsideComponent } from './components/aside/aside.component';
import { LayoutModule } from '../layout/layout.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CardComponent,
    AsideComponent,
    HomeComponent,
    DetailsComponent,
    CatalogueComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    LayoutModule,
    RouterModule,
    HttpClientModule
  ]
})
export class ClientModule { }
