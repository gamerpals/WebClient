import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateActiveSearchComponent } from './create-active-search.component';

describe('CreateActiveSearchComponent', () => {
    let component: CreateActiveSearchComponent;
    let fixture: ComponentFixture<CreateActiveSearchComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
                   declarations: [ CreateActiveSearchComponent ]
               })
               .compileComponents();


        fixture = TestBed.createComponent(CreateActiveSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    afterAll(() => {
        TestBed.resetTestingModule();
    });
});
