import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSceneComponent } from './dialog-scene.component';

describe('DialogSceneComponent', () => {
  let component: DialogSceneComponent;
  let fixture: ComponentFixture<DialogSceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogSceneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
