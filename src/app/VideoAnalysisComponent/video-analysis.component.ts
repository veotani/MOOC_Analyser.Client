import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
    selector:    'video-analysis',
    templateUrl: './video-analysis.component.html'
  })
export class VideoAnalysisComponent {
    chart = new Chart({
        chart: {
          type: 'line'
        },
        title: {
          text: 'Linechart'
        },
        credits: {
          enabled: false
        },
        series: [{
            name: 'Line 1',
            data: [1, 2, 3]
          }]
      });
      add() {
        this.chart.addPoint(Math.floor(Math.random() * 10));
      }
}