import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCarrosel2Component } from './item-carrosel-2.component';

describe('ItemCarrosel2Component', () => {
  let component: ItemCarrosel2Component;
  let fixture: ComponentFixture<ItemCarrosel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCarrosel2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCarrosel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
