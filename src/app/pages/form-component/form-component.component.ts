import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServicesService } from '../../services/services.service';
import { CommonModule } from '@angular/common';
import { IModules } from '../../modules/modules';

@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.scss'
})
export class FormComponentComponent implements OnInit {

  public searchedText: string = '';
  public name: string = '';
  public products: IModules[] = [];
  
  constructor(public productService:ServicesService){
    this.getProductsDetail();
  }
  public ngOnInit() {
    this.onSearch(this.searchedText);
  }

  public getProductsDetail(){
    this.productService.getProducts().subscribe((res) => {
      this.products = <IModules[]>res;
    });
  }

   public onSearch(searchedText: string) {
    this.searchedText = searchedText.toLowerCase().trim();
    if (this.searchedText && this.searchedText.length > 0) {
      if (this.searchedText && this.searchedText.length > 2) {
        let searchedList: IModules[] = [];
        this.products.forEach((ele) => {
          if (ele && ele.title.toLocaleLowerCase().trim() === this.searchedText) {
            searchedList.push(ele);
          }
          if (ele && ele.description.toLocaleLowerCase().trim() === this.searchedText) {
            searchedList.push(ele);
          }
        });
        this.products = searchedList;
      }
    } else {
      this.searchedText = '';
      this.getProductsDetail();
    }
  }
  
}
