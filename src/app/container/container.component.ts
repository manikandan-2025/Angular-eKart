import { Component,Input, ViewChild } from '@angular/core';
import { SearchComponent } from "./search/search/search.component";
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FeaturedBrandsComponent } from './featured-brands/featured-brands.component';

@Component({
    selector: 'container',
    standalone: true,
    templateUrl: './container.component.html',
    styleUrl: './container.component.css',
    imports: [SearchComponent, 
            CommonModule,ProductListComponent,ProductDetailComponent, FeaturedBrandsComponent]
})
export class ContainerComponent {
 
  // listOfStrings: string[] = ["Mark","Steve","Merry","John","Sarah"]

  @Input()
  searchText:string = '';

  @ViewChild('ProductListComponent') produtListComponent:ProductListComponent;

  setSearchText(value:string) {
    this.searchText = value;
  }


  
}
