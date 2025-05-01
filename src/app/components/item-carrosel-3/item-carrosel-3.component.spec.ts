import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCarrosel3Component } from './item-carrosel-3.component';

describe('ItemCarrosel3Component', () => {
  let component: ItemCarrosel3Component;
  let fixture: ComponentFixture<ItemCarrosel3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCarrosel3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCarrosel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
