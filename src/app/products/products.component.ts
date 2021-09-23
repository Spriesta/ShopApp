// import { products } from './../products';
import { ShopService,Order,Product } from './../shop.service';
import { OrdersComponent } from './../orders/orders.component';
import { Component,  } from '@angular/core';
// import { products } from "../products";  //karışıklık olmasın diye products.ts oluşturdum ve buraya import edip instance oluşturup rahatça ulaştım
import { HttpClient } from "@angular/common/http";



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {


  products : Product[] =[] ;

  basket:Product[] =[]; // basket dediği yer sepet


 constructor(
    private http : HttpClient,
    private shopService :ShopService){}


  ngOnInit():void{
    this.basket=this.shopService.basket;

    this.http.get<Product[]>("/api/products").subscribe(products =>{
      this.products=products
    })
  }




  getTotal() :number{
    let total= 0 ;

    for(let item of this.basket){
      total += item.price*item.quantity;
    }
    return total;
  }


  createOrder():void{ // burda oluşturduğumuz veriyi orders'a aktarmak için servisleri kullanıyoruz

    {
      let order:Order  = {
        count : this.basket.length,
        cost : this.getTotal()
      };


      if (order.count == 0) {}
       else {
        this.shopService.orders.push(order);

      for(let item of this.basket){
      this.basket.length=0;
      item.quantity =  0;
      }
      }

    }

  }


}





