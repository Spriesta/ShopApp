import { DetailComponent } from './detail/detail.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:'',redirectTo:'products',pathMatch:'full'},  // ilk açıldığında boş sayfa göstermemesi için direkt buraya yönlendiriyoruz
  {path:'products',component:ProductsComponent},
  {path:'orders',component:OrdersComponent},
  {path:'products/:productId',component:DetailComponent}, //dinamik bir router :

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
