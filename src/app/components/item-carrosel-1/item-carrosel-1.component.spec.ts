import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCarrosel1Component } from './item-carrosel-1.component';

describe('ItemCarrosel1Component', () => {
  let component: ItemCarrosel1Component;
  let fixture: ComponentFixture<ItemCarrosel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCarrosel1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCarrosel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
