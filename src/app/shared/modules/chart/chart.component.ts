import {
  Component,
  DoCheck,
  Input,
  IterableDiffers,
  ViewChild,
} from '@angular/core';
import { cloneDeep } from 'lodash';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexLegend,
  ApexDataLabels,
} from 'ng-apexcharts';

import { IChartAttendance } from '../../models/chart.model';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  markers: any;
  stroke: any;
  yaxis: ApexYAxis | ApexYAxis[];
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  legend: ApexLegend;
  fill: ApexFill;
  tooltip: ApexTooltip;
};
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartsComponent implements DoCheck {
  private iterableDiffer: any;
  public chartOptions: Partial<ChartOptions>;
  @ViewChild('chart') chart: ChartComponent;
  @Input() chartData: IChartAttendance[];
  @Input() chartName: string;

  constructor(iterableDiffers: IterableDiffers) {
    this.iterableDiffer = iterableDiffers.find([]).create(null);
  }

  ngDoCheck() {
    const changes = this.iterableDiffer.diff(this.chartData);
    if (changes) {
      this.drawChart(changes.collection);
    }
  }

  drawChart(data: IChartAttendance[]) {
    const totalAttendance = [];
    const totalTrainee = [];
    const totalResign = [];
    const attRate = [];
    const date = [];
    for (const iterator of data) {
      totalAttendance.push(iterator.totalAttendance);
      totalTrainee.push(iterator.total);
      attRate.push(
        Math.round(
          (iterator.totalAttendance * 100) / iterator.total ===
            Number.POSITIVE_INFINITY
            ? 0
            : (iterator.totalAttendance * 100) / iterator.total
        )
      );
      totalResign.push(iterator.totalAttendance);
      // tslint:disable-next-line:no-string-literal
      date.push(iterator['newDate']);
    }

    this.chartOptions = {
      series: [
        {
          name: 'Tổng số lượng Trainee',
          type: 'column',
          data: totalTrainee,
        },
        {
          name: 'Tổng số lượng có mặt',
          type: 'column',
          data: totalAttendance,
        },
        {
          name: 'Số lượng nghỉ bỏ',
          type: 'column',
          data: totalResign,
        },
        {
          name: 'Tỷ lệ có mặt',
          type: 'line',
          data: attRate,
        },
      ],
      chart: {
        height: 350,
        type: 'line',
        stacked: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [1, 1, 4],
      },
      title: {
        text: this.chartName,
        align: 'left',
        offsetX: 110,
      },
      xaxis: {
        categories: date,
      },
      yaxis: [
        {
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#008FFB',
          },
          labels: {
            style: {
              colors: '#008FFB',
            },
          },
          title: {
            text: 'Quantity Trainee',
            style: {
              color: '#008FFB',
            },
          },
          tooltip: {
            enabled: true,
          },
        },
        {
          seriesName: 'Total Attendance',
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#00E396',
          },
          labels: {
            style: {
              colors: '#00E396',
            },
          },
          title: {
            text: 'Total Attendance',
            style: {
              color: '#00E396',
            },
          },
        },
        {
          seriesName: 'Total Resign',
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#FEB019',
          },
          labels: {
            style: {
              colors: '#FEB019',
            },
          },
          title: {
            text: 'Total Resign',
            style: {
              color: '#FEB019',
            },
          },
        },
        {
          seriesName: 'Attendance Rate',
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#FF4560',
          },
          labels: {
            style: {
              colors: '#FF4560',
            },
          },
          title: {
            text: 'Attendance Rate',
            style: {
              color: '#FF4560',
            },
          },
        },
      ],
      tooltip: {
        fixed: {
          enabled: true,
          position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
          offsetY: 30,
          offsetX: 60,
        },
      },
      legend: {
        horizontalAlign: 'left',
        offsetX: 40,
      },
    };
  }
}
