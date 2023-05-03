import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionDosComponent } from './cotizacion-dos.component';

describe('CotizacionDosComponent', () => {
  let component: CotizacionDosComponent;
  let fixture: ComponentFixture<CotizacionDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotizacionDosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CotizacionDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
