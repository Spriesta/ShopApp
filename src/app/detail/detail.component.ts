import { products } from './../products';
import { Product } from './../shop.service';
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  productId! :string;
  product?: Product ;

  relatedProducts:Product[] = []

  constructor(private route :ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap =>{
      this.productId = paramMap.get("productId") as string; //dinamik router kısmı buralar activatedroute
    this.product = products.find  (p=>p.id == Number(this.productId));

    this.relatedProducts = products.filter(p=>this.product?.related.includes(p.id));
    }

    )



  }

}
