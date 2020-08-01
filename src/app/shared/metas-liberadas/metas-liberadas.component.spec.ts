import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetasLiberadasComponent } from './metas-liberadas.component';

describe('MetasLiberadasComponent', () => {
  let component: MetasLiberadasComponent;
  let fixture: ComponentFixture<MetasLiberadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetasLiberadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetasLiberadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
