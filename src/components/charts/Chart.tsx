import { FC } from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';

import './Chart.css'

interface ChartProps {
  chartOptions: EChartsOption
}

const Chart: FC<ChartProps> = ({chartOptions}) => {
  return <ReactECharts option={chartOptions}  className='main-chart' />;
};

export default Chart;