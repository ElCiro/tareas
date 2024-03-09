import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasCigrComponent } from './tareas-cigr.component';

describe('TareasCigrComponent', () => {
  let component: TareasCigrComponent;
  let fixture: ComponentFixture<TareasCigrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasCigrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasCigrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
