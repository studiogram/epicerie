import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { TestComponent } from './components/test/test.component';
import { AnimauxComponent } from './components/animaux/animaux.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AnimauxComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
