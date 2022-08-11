import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { SecurityComponent } from './security/security.component';
import { RouterModule } from '@angular/router';
// import { PanierComponent } from './panier/panier.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    SecurityComponent,
    // PanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
