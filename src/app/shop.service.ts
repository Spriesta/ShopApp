import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  orders:Order[] = [

  ]

  constructor() { }

}


export type Order ={
  count : number,
  cost:number
}
