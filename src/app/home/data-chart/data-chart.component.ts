import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Location } from '@angular/common';
@Component({
  selector: 'app-data-chart',
  templateUrl: './data-chart.component.html',
  styleUrls: ['./data-chart.component.scss'],
})
export class DataChartComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit(): void {}

  chart = new Chart({
    chart: {
      type: 'bar',
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: ['Coca cola', 'Fanta', 'Sprite', 'Cappy'],
    },
    yAxis: [
      {
        title: {
          text: '',
        },
      },
      {
        title: {
          text: '',
        },
        opposite: true,
      },
    ],
    legend: {
      shadow: false,
    },
    tooltip: {
      shared: true,
    },
    plotOptions: {
      bar: {
        grouping: false,
        shadow: false,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: 'val_1',
        color: 'rgba(165,170,217,1)',
        data: [4000, 700, 400, 500],
        type: undefined,
        pointPadding: 0.3,
        pointPlacement: -0.2,
      },
      {
        name: 'val_2',
        color: 'rgba(126,86,134,.9)',
        data: [2000, 900, 500, 500],
        type: undefined,
        pointPadding: 0.4,
        pointPlacement: -0.2,
      },
      {
        name: 'mark_val',
        color: '#000',
        data: [3000, 800, 900, 500],
        type: 'column',
        pointPadding: 0.4,
        pointPlacement: -0.2,
      },
    ],
  });

  backClicked() {
    this.location.back();
  }
}
