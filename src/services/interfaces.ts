export enum chartTypes {
    line = 'line',
    bar = 'bar',
    pie = 'pie',
    column ='column'
}

export interface chartSlotInterface {
    key: string;
    x: number;
    y: number;
    w: number;
    h: number; 
    minW?: number;
    maxW?: number;
    chartType: chartTypes
}

export interface AddChartModalButtons {
    title: string;
    icon: JSX.Element;
    chartType: chartTypes
}