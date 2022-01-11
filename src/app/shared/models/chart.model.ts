export class IChartData {
    date: number;
    month: number;
    year: number;
    total: number;
}

export class IChartAttendance {
    date: number;
    month: number;
    year: number;
    total: number;
    totalAttendance: number;
    percentage: number;
}

export class IChartSearch {
    Dept?: string;
    FromDate?: string;
    ToDate?: string;
    Area?: string;
}
