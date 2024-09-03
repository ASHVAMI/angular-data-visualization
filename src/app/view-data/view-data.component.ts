import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js/auto';

interface DataEntry {
  datetime: string;
  temperature: number;
}

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.scss']
})
export class ViewDataComponent implements OnInit {
  @Input() dataEntries: DataEntry[] = [];
  chart: any;

  ngOnInit() {
    this.createChart();
  }

  ngOnChanges() {
    this.updateChart();
  }

  createChart() {
    const ctx = document.getElementById('temperatureChart') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.dataEntries.map(entry => entry.datetime),
        datasets: [
          {
            label: 'Temperature',
            data: this.dataEntries.map(entry => entry.temperature),
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }
        ]
      },
      options: {
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day'
            }
          },
          y: {
            beginAtZero: false,
            min: -50,
            max: 50
          }
        }
      }
    });
  }

  updateChart() {
    this.chart.data.labels = this.dataEntries.map(entry => entry.datetime);
    this.chart.data.datasets[0].data = this.dataEntries.map(entry => entry.temperature);
    this.chart.update();
  }
}
