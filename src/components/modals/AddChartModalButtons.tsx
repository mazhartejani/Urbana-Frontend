import { BarChart, PieChart, Segment, SsidChart } from "@mui/icons-material";
import { AddChartModalButtons, chartTypes } from "../../services/interfaces";

export const addChartModalButtonsData: Array<AddChartModalButtons> = [
    {
        title: 'Bar Chart',
        icon: <Segment className='graph-button-icon'/>,
        chartType: chartTypes.bar,
    },
    {
        title: 'Pie Chart',
        icon: <PieChart className='graph-button-icon'/>,
        chartType: chartTypes.pie,
    },
    {
        title: 'Column Chart',
        icon: <BarChart className='graph-button-icon'/>,
        chartType: chartTypes.column,
    },
    {
        title: 'Line Chart',
        icon: <SsidChart className='graph-button-icon'/>,
        chartType: chartTypes.line,
    }
]