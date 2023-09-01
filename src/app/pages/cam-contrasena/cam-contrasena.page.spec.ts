import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamContrasenaPage } from './cam-contrasena.page';

describe('CamContrasenaPage', () => {
  let component: CamContrasenaPage;
  let fixture: ComponentFixture<CamContrasenaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CamContrasenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
