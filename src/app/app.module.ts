import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { TestComponent } from './components/test/test.component';
import { AnimauxComponent } from './components/animaux/animaux.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AnimauxService } from './services/animaux.service';
import { ProductsService } from './services/products.service';
import { AnimalComponent } from './components/animal/animal.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { ErrorComponent } from './components/error/error.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AnimauxComponent,
    ProductListComponent,
    AnimalComponent,
    AddProductComponent,
    UpdateProductComponent,
    ErrorComponent,
    MenuComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AnimauxService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
