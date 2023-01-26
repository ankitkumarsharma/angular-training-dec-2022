import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productData:any;
  constructor(private activateRoute: ActivatedRoute){}
  ngOnInit(): void {
    console.log(this.activateRoute)
    this.activateRoute.queryParams.subscribe((data:any)=>{
      this.productData = data;
    })
  }
}
