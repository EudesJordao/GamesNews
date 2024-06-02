import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCodComponent } from './news-cod.component';

describe('NewsCodComponent', () => {
  let component: NewsCodComponent;
  let fixture: ComponentFixture<NewsCodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsCodComponent]
    });
    fixture = TestBed.createComponent(NewsCodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
