import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasinmazFormComponent } from './tasinmaz-form.component';

describe('TasinmazFormComponent', () => {
  let component: TasinmazFormComponent;
  let fixture: ComponentFixture<TasinmazFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasinmazFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasinmazFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
