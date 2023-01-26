import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './products/product/product.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'product/:id', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
