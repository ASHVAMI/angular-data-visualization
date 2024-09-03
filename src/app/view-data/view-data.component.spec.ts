import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewDataComponent } from './view-data.component';
import { Chart } from 'chart.js/auto';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ViewDataComponent', () => {
  let component: ViewDataComponent;
  let fixture: ComponentFixture<ViewDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDataComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Chart Initialization', () => {
    it('should create a chart', () => {
      const chartSpy = spyOn(Chart, 'constructor');
      component.createChart();
      expect(chartSpy).toHaveBeenCalled();
    });

    it('should update the chart when data changes', () => {
      const chartSpy = spyOn(component.chart, 'update');
      component.dataEntries = [
        { datetime: '2024-01-01T00:00:00Z', temperature: 20 },
        { datetime: '2024-01-02T00:00:00Z', temperature: 25 }
      ];
      component.ngOnChanges();
      expect(chartSpy).toHaveBeenCalled();
    });
  });
});
