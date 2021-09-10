import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { Component } from '@angular/core';
import { products } from "./products";  //karışıklık olmasın diye products.ts oluşturdum ve buraya import edip instance oluşturup rahatça ulaştım

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products = products ;

  basket:Product[] =[];




  getTotal() :string{
    let total= 0 ;

    for(let item of this.basket){
      total += item.price*item.quantity;
    }
    return total.toFixed(2)+ ' TL'
  }



  decreaseAmount(){
    // ürün miktarı sıfır ise pasif veya azalt

  }



  increaseAmount(product :Product):void{
    // sepette yoksa ekliyoruz
    if (!this.basket.includes(product)) {
      this.basket.push(product);
    }


    // ürün miktarını arttırıyoruz
    product.quantity++ ;
  }


}

type Product =
  {
    id : number,
    name : string,
    photoPath : string,
    price : number,
    unit : string,
    quantity : number
  }


