// import { products } from './../products';
import { Product } from './../shop.service';
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  productId! :string;
  product?: Product ;

  relatedProducts:Product[] = []

  constructor(
    private http:HttpClient,
    private route :ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap =>{

      this.productId = paramMap.get("productId") as string; //dinamik router kısmı buralar activatedroute

      this.http.get<Product>("/api/products/"+this.productId).subscribe(product =>{
        this.product = product

        this.http.get<Product[]>("/api/products").subscribe(products=>{
          this.relatedProducts = products.filter(p=>this.product?.related.includes(p.id));

        })
      })



    }

    )



  }

}
