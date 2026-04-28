import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output,ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'search',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

 
  searchText:string = '';
  
  @Output()
  searchTextChanged:EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged() {
    // this.searchTextChanged.emit(this.searchText);
  }

  @ViewChild('searchInput') searchInputEl: ElementRef

  updateSearchText() {
      // this.searchText = event.target.value;
      // console.log(inputEl.value);
     this.searchText = this.searchInputEl.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);


}

}
