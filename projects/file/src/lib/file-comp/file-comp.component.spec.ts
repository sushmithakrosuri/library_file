import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileCompComponent } from './file-comp.component';

describe('FileCompComponent', () => {
  let component: FileCompComponent;
  let fixture: ComponentFixture<FileCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
