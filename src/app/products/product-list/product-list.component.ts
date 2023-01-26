import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  allData:any;
  constructor(private apiService:ApiService, private router:Router){}
  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.apiService.getData().subscribe((data:any)=>{
      if(data){
        this.allData = data.products;
      }
    })
  }

  showProductDetails(item:any){
    this.apiService.getSingleProduct(item).subscribe((data:any)=>{
      this.router.navigate([`/product/${item.id}`],{queryParams: data});
    })
    // this.router.navigate([`/product/${item.id}`, {queryParams: JSON.stringify(item)}],);
  }
}
