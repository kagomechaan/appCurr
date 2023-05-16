import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupFaleComigoComponent } from './popup-fale-comigo.component';

describe('PopupFaleComigoComponent', () => {
  let component: PopupFaleComigoComponent;
  let fixture: ComponentFixture<PopupFaleComigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupFaleComigoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupFaleComigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
