import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCreationFormComponent } from './item-creation-form.component';

describe('ItemCreationFormComponent', () => {
  let component: ItemCreationFormComponent;
  let fixture: ComponentFixture<ItemCreationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCreationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCreationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
