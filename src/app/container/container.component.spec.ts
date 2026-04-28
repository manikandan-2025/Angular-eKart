import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContainerComponent } from './container.component';
import { SearchComponent } from './search/search/search.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FeaturedBrandsComponent } from './featured-brands/featured-brands.component';
import { CommonModule } from '@angular/common';

describe('ContainerComponent', () => {
    let component: ContainerComponent;
    let fixture: ComponentFixture<ContainerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                ContainerComponent,
                SearchComponent,
                ProductListComponent,
                ProductDetailComponent,
                FeaturedBrandsComponent,
                CommonModule
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(ContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the container component', () => {
        expect(component).toBeTruthy();
    });

    it('should initialize with an empty searchText', () => {
        expect(component.searchText).toBe('');
    });

    it('should update searchText when setSearchText is called', () => {
        const testSearchText = 'test search';
        component.setSearchText(testSearchText);
        expect(component.searchText).toBe(testSearchText);
    });

    it('should render the search component', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('search')).toBeTruthy();
    });

    it('should render the product-list component', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('product-list')).toBeTruthy();
    });
});
