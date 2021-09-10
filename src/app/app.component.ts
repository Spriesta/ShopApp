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

  basket:Product[] =[]; // basket dediği yer sepet



  getTotal() :string{
    let total= 0 ;

    for(let item of this.basket){
      total += item.price*item.quantity;
    }
    return total.toFixed(2)+ ' TL'
  }

  removeIfZero(product:Product){

    if (product.quantity == 0 ) {
      let index = this.basket.indexOf(product)
      this.basket.splice(index,1)
    }

  }

  addIfNotInBasket(product:Product):void{
    if (!this.basket.includes(product) && product.quantity > 0 ) {
      this.basket.push(product)
    }
  }

  updateBasket(product:Product):void{
    this.removeIfZero(product)

    this.addIfNotInBasket(product)
  }


  decreaseAmount(product:Product):void{
    // ürün miktarı sıfır ise birşey yapma
    if (product.quantity == 0 ) {
      return;
    }

    // ürün miktarı azalt
    product.quantity --;

    //ürün miktarı sıfır ise sepetten çıkar
    this.removeIfZero(product)
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


