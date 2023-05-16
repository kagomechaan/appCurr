import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescricaoXPComponentComponent } from './descricao-xpcomponent.component';

describe('DescricaoXPComponentComponent', () => {
  let component: DescricaoXPComponentComponent;
  let fixture: ComponentFixture<DescricaoXPComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescricaoXPComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescricaoXPComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
