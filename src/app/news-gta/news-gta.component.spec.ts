import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsGtaComponent } from './news-gta.component';

describe('NewsGtaComponent', () => {
  let component: NewsGtaComponent;
  let fixture: ComponentFixture<NewsGtaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsGtaComponent]
    });
    fixture = TestBed.createComponent(NewsGtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
