import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { range } from 'rxjs';
import { Point, Series } from 'highcharts';
import { ChartService } from 'angular-highcharts/lib/chart.service';

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
            data: [[0.1, 1], [.2, 4], [.3, 9], [.4, 16], [.41, 25]]
          }]
      });
      add() {
        this.chart.addPoint(Math.floor(Math.random() * 10));
        
      }

      genData()
      {
          let xPoints = [1, 2, 3, 4, 5];
          let yPoints = [];

          for (let xPoint of xPoints)
          {
              yPoints.push(Math.pow(xPoint, 2))
          }

      }
}