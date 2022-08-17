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
import { ListeComponent } from './components/liste/liste.component';
import { AllBoissonComponent } from './pages/details/all-boisson/all-boisson.component';
import { NbeBoissonComponent } from './pages/details/nbe-boisson/nbe-boisson.component';
import { DetailMenuComponent } from './pages/details/detail-menu/detail-menu.component';
import { PanierComponent } from './panier/panier.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ListeCommandeComponent } from './liste-commande/liste-commande.component';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';
// import {Ng2SearchPipeModule} from 'ng2-search-filter'
// import { CardDetailComponent } from './pages/details/card-detail/card-detail.component';
// import { SelectBoissonComponent } from './pages/details/select-boisson/select-boisson.component';
// import { DetailMenuComponent } from './pages/details/detail-menu/detail-menu.component';
// import { ChoixBoissonComponent } from './pages/details/choix-boisson/choix-boisson.component';
// import { CardDetailComponent } from './pages/details/card-detail/card-detail.component';
// import { CardCountComponent } from './pages/details/card-count/card-count.component';


@NgModule({
  declarations: [
    CardComponent,
    AsideComponent,
    HomeComponent,
    DetailsComponent,
    CatalogueComponent,
    ListeComponent,
    AllBoissonComponent,
    NbeBoissonComponent,
    DetailMenuComponent,
    PanierComponent,
    LoginComponent,
    ListeCommandeComponent,
    // CardDetailComponent,
    // SelectBoissonComponent,
    // DetailMenuComponent,
    // ChoixBoissonComponent,
    // CardDetailComponent,
    // CardCountComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    LayoutModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class ClientModule { }
