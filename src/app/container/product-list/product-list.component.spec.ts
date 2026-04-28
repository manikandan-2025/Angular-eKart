import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('ProductListComponent Filter and Search', () => {
    let component: ProductListComponent;
    let fixture: ComponentFixture<ProductListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProductListComponent, CommonModule, FilterComponent, ProductComponent, FormsModule],
        }).compileComponents();

        fixture = TestBed.createComponent(ProductListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('Search Functionality', () => {
        it('should filter products according to search text', () => {
            // Set search text to 'Nike'
            component.searchText = 'Nike';
            fixture.detectChanges();

            const productElements = fixture.debugElement.queryAll(By.css('app-product'));

            // All filtered products should have 'Nike' in their name
            productElements.forEach((el) => {
                const productInstance = el.componentInstance.product;
                expect(productInstance.name.toLowerCase()).toContain('nike');
            });

            // Verify at least some products matched
            expect(productElements.length).toBeGreaterThan(0);
        });

        it('should show all products when search text is empty', () => {
            component.searchText = '';
            fixture.detectChanges();

            const productElements = fixture.debugElement.queryAll(By.css('app-product'));
            expect(productElements.length).toBe(component.products.length);
        });

        it('should show "No products available" when search matches nothing', () => {
            component.searchText = 'NonExistentProductXYZ';
            fixture.detectChanges();

            const productElements = fixture.debugElement.queryAll(By.css('app-product'));
            expect(productElements.length).toBe(0);

            const noProductMsg = fixture.debugElement.query(By.css('h1')).nativeElement;
            expect(noProductMsg.textContent).toContain('No products available');
        });
    });

    describe('Filter Functionality', () => {
        it('should filter in-stock products when "true" (In Stock) is selected', () => {
            // simulate filter change to in-stock
            // note: is_in_inventory is boolean, selectedFilterRadio is string 'true'/'false'/'all'
            component.selectedFilterRadio = 'true';
            fixture.detectChanges();

            const productElements = fixture.debugElement.queryAll(By.css('app-product'));

            productElements.forEach((el) => {
                const productInstance = el.componentInstance.product;
                expect(productInstance.is_in_inventory).toBeTrue();
            });

            // Check count against component calculated count
            expect(productElements.length).toBe(component.totalProductInStock);
        });

        it('should filter out-of-stock products when "false" (Out of Stock) is selected', () => {
            component.selectedFilterRadio = 'false';
            fixture.detectChanges();

            const productElements = fixture.debugElement.queryAll(By.css('app-product'));

            productElements.forEach((el) => {
                const productInstance = el.componentInstance.product;
                expect(productInstance.is_in_inventory).toBeFalse();
            });

            expect(productElements.length).toBe(component.totalProductOutOfStock);
        });

        it('should show all products when "all" is selected', () => {
            component.selectedFilterRadio = 'all';
            fixture.detectChanges();

            const productElements = fixture.debugElement.queryAll(By.css('app-product'));
            expect(productElements.length).toBe(component.products.length);
        });
    });

    describe('Combined Search and Filter', () => {
        it('should filter by BOTH search text and stock status', () => {
            // Search 'Nike' and Filter 'In Stock'
            component.searchText = 'Nike';
            component.selectedFilterRadio = 'true';
            fixture.detectChanges();

            const productElements = fixture.debugElement.queryAll(By.css('app-product'));

            productElements.forEach((el) => {
                const productInstance = el.componentInstance.product;
                expect(productInstance.name.toLowerCase()).toContain('nike');
                expect(productInstance.is_in_inventory).toBeTrue();
            });

            // Verify it's a subset
            expect(productElements.length).toBeLessThan(component.products.length);
        });
    });
});
