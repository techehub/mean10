import { Component, OnInit } from '@angular/core';
import {ProductserviceService} from '../productservice.service'
import { IProduct } from '../product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  products : IProduct[]

  constructor(private service:ProductserviceService ) {


   }

  ngOnInit(): void {

    this.service.getproduct().subscribe (data=> {
        this.products= data
    })

  }

}
