import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AnimalComponent } from './components/animal/animal.component';
import { AnimauxComponent } from './components/animaux/animaux.component';
import { ErrorComponent } from './components/error/error.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { TestComponent } from './components/test/test.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';

const routes: Routes = [
  {path: 'produits/:id', component: UpdateProductComponent},
  {path: 'produits', component: ProductListComponent},
  {path: 'ajouter', component: AddProductComponent},
  {path: 'test', component: TestComponent},
  {path: '', pathMatch: 'full', redirectTo: '/produits'},
  {path: '**', component: ErrorComponent},
  
  // {path: '', pathMatch: 'full', component: TestComponent},
  // {path: 'animaux/:id', component: AnimalComponent},
  // {path: 'animaux', component: AnimauxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
