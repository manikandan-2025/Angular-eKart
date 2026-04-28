import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterComponent } from './filter.component';
import { FormsModule } from '@angular/forms';

describe('FilterComponent', () => {
    let component: FilterComponent;
    let fixture: ComponentFixture<FilterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FilterComponent, FormsModule]
        })
            .compileComponents();

        fixture = TestBed.createComponent(FilterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have default selectedFilterRadioButton as "all"', () => {
        expect(component.selectedFilterRadioButton).toBe('all');
    });

    it('should emit selectedFilterRadioButtonChange event when onSelectedFilterRadioButtonChanged is called', () => {
        spyOn(component.selectedFilterRadioButtonChange, 'emit');

        component.selectedFilterRadioButton = 'inStock';
        component.onSelectedFilterRadioButtonChanged();

        expect(component.selectedFilterRadioButtonChange.emit).toHaveBeenCalledWith('inStock');
    });

    it('should accept Input values for all, inStock, and outOfStock', () => {
        component.all = 10;
        component.inStock = 7;
        component.outOfStock = 3;

        fixture.detectChanges();

        expect(component.all).toBe(10);
        expect(component.inStock).toBe(7);
        expect(component.outOfStock).toBe(3);
    });
});
