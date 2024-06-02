import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsMultiVersusComponent } from './news-multi-versus.component';

describe('NewsMultiVersusComponent', () => {
  let component: NewsMultiVersusComponent;
  let fixture: ComponentFixture<NewsMultiVersusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsMultiVersusComponent]
    });
    fixture = TestBed.createComponent(NewsMultiVersusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
