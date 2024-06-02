import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCs2Component } from './news-cs2.component';

describe('NewsCs2Component', () => {
  let component: NewsCs2Component;
  let fixture: ComponentFixture<NewsCs2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsCs2Component]
    });
    fixture = TestBed.createComponent(NewsCs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
