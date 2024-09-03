import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { By } from '@angular/platform-browser';

import { AddDataComponent } from './add-data.component';

describe('AddDataComponent', () => {
  let component: AddDataComponent;
  let fixture: ComponentFixture<AddDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddDataComponent],
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have an invalid form when fields are empty', () => {
    expect(component.dataForm.valid).toBeFalsy();
  });

  it('should validate the datetime field correctly', () => {
    const datetimeControl = component.dataForm.controls['datetime'];
    
    datetimeControl.setValue('');
    expect(datetimeControl.valid).toBeFalsy();
    expect(datetimeControl.hasError('required')).toBeTruthy();
    
    const futureDate = new Date(Date.now() + 86400000).toISOString().slice(0, 16); // 1 day in future
    datetimeControl.setValue(futureDate);
    expect(datetimeControl.valid).toBeFalsy();
    expect(datetimeControl.hasError('pastDate')).toBeTruthy();
    
    const pastDate = new Date(Date.now() - 86400000).toISOString().slice(0, 16); // 1 day in past
    datetimeControl.setValue(pastDate);
    expect(datetimeControl.valid).toBeTruthy();
  });

  it('should validate the temperature field correctly', () => {
    const temperatureControl = component.dataForm.controls['temperature'];

    temperatureControl.setValue('');
    expect(temperatureControl.valid).toBeFalsy();
    expect(temperatureControl.hasError('required')).toBeTruthy();

    temperatureControl.setValue(-100);
    expect(temperatureControl.valid).toBeFalsy();
    expect(temperatureControl.hasError('min')).toBeTruthy();

    temperatureControl.setValue(100);
    expect(temperatureControl.valid).toBeFalsy();
    expect(temperatureControl.hasError('max')).toBeTruthy();

    temperatureControl.setValue(25);
    expect(temperatureControl.valid).toBeTruthy();
  });

  it('should add data to the list on form submit', () => {
    expect(component.dataEntries.length).toBe(0);

    component.dataForm.controls['datetime'].setValue(new Date(Date.now() - 86400000).toISOString().slice(0, 16));
    component.dataForm.controls['temperature'].setValue(25);

    component.addData();

    expect(component.dataEntries.length).toBe(1);
    expect(component.dataEntries[0].temperature).toBe(25);
  });

  it('should reset the form after adding data', () => {
    component.dataForm.controls['datetime'].setValue(new Date(Date.now() - 86400000).toISOString().slice(0, 16));
    component.dataForm.controls['temperature'].setValue(25);

    component.addData();

    expect(component.dataForm.controls['datetime'].value).toBeNull();
    expect(component.dataForm.controls['temperature'].value).toBeNull();
  });

  it('should disable the submit button if the form is invalid', () => {
    const button = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement;
    expect(button.disabled).toBeTrue();

    component.dataForm.controls['datetime'].setValue(new Date(Date.now() - 86400000).toISOString().slice(0, 16));
    component.dataForm.controls['temperature'].setValue(25);

    fixture.detectChanges();
    expect(button.disabled).toBeFalse();
  });
});
