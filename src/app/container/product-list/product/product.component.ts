import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HighlightDirective } from '../../../CustomDirectives/highlight.directive';
import { Product } from '../../../Models/Product';
import { DisableProductDirective } from '../../../CustomDirectives/disable-product.directive';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, HighlightDirective, DisableProductDirective, FormsModule, RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input()
  index:number;
  @Input()
  product:Product;
}
