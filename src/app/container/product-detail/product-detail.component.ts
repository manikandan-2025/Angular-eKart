import { Component, Input } from '@angular/core';
import { Product } from '../../Models/Product';
import { ProductListComponent } from '../product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { SetBackground } from '../../CustomDirectives/SetBackGround.directive';
import { AppHoverDirective } from '../../CustomDirectives/app-hover.directive';


@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [CommonModule,SetBackground, AppHoverDirective],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {


  @Input() prductListComp:ProductListComponent;
  product:Product;

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.product= this.prductListComp.selectedProduct;
  }

}
