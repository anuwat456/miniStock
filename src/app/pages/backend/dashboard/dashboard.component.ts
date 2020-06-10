import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public productapi:ProductService) { }

  productlist:any = [];
  ngOnInit(): void {
    this.productapi.getProducts().subscribe((data:{}) => {console.log(data)
      this.productlist = data;});
  }

}
