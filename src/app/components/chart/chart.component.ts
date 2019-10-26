import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'src/app/models/Chart';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() chartData: Chart;

  currentChartData: any = {
    title: null,
    type: null,
    data: [],
    columnNames: [],
    options: null,
    width: null,
    height: null
  };

  assignChartData() {
    let chartData = this.chartData.values.map(value => {
      const date = new Date(value.x * 1000);
      const arrangedDate = `${date.getDate()}/${date.getMonth() + 1}`;
      const price = Math.round(value.y);
      return [arrangedDate, price];
    });
    this.currentChartData.title = this.chartData.name;
    this.currentChartData.type = 'LineChart';
    this.currentChartData.data = chartData;
    this.currentChartData.columnNames = ['', this.chartData.name];
    this.currentChartData.options = {
      vAxis: {
        title: this.chartData.unit
      }
    };
    this.currentChartData.height = 400;
  }

  constructor() {}

  ngOnInit() {
    this.assignChartData();
  }
}
