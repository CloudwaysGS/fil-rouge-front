import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { CatalogueComponent} from './pages/catalogue/catalogue.component';
import { PanierComponent } from './panier/panier.component';
import { LoginComponent } from './login/login.component';
import { ListeCommandeComponent } from './liste-commande/liste-commande.component';


const routes: Routes = [
  { path: '', component: CatalogueComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'login', component: LoginComponent },
  { path: 'listeCommande', component: ListeCommandeComponent }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ClientRoutingModule { }
