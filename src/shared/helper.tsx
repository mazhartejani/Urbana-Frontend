import { chartTypes } from "../services/interfaces"
import Chart from "../components/charts/Chart"
import { barChartOptions, columnChartOptions, lineChartOptions, pieChartOptions } from "../components/charts/chart-options"

export const renderChart = (chartType: chartTypes) => {
    switch (chartType) {
        case chartTypes.line:
            return <Chart chartOptions={lineChartOptions} />
        case chartTypes.bar:
            return <Chart chartOptions={barChartOptions} />
        case chartTypes.pie:
            return <Chart chartOptions={pieChartOptions} />
        case chartTypes.column:
            return <Chart chartOptions={columnChartOptions} />
        default:
            break;
    }
}