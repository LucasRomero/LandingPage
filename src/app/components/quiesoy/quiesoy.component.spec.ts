import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiesoyComponent } from './quiesoy.component';

describe('QuiesoyComponent', () => {
  let component: QuiesoyComponent;
  let fixture: ComponentFixture<QuiesoyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuiesoyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuiesoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
