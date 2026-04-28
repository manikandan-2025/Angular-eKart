import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('SearchComponent', () => {
    let component: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SearchComponent, FormsModule]
        })
            .compileComponents();

        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should initialize with empty searchText', () => {
        expect(component.searchText).toBe('');
    });

    it('should emit searchTextChanged event when updateSearchText is called', () => {
        spyOn(component.searchTextChanged, 'emit');

        // Mock ViewChild element
        component.searchInputEl = {
            nativeElement: {
                value: 'test search'
            }
        };

        component.updateSearchText();

        expect(component.searchText).toBe('test search');
        expect(component.searchTextChanged.emit).toHaveBeenCalledWith('test search');
    });
});
