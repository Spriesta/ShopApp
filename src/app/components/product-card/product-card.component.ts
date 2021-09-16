import { ShopService,Product} from './../../shop.service';
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input()
  product! :Product;
  basket! : Product[];

  constructor(private ShopService:ShopService) { }

  ngOnInit(): void {
    this.basket=this.ShopService.basket;
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
