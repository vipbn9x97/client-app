export class MultiFilter {
    shift: string;
    date: string;
    deptId: number;
}

export class IAbsent {
    typeAbsent: string;
    type: string;
    fromDate: string;
    toDate: string;
    shift: string;
    stationId: number;
}

export class IMultiOrderDetail {
    priority: number;
    stationId: number;
    typeAbsent: string;
    dept: number;
    model: string;
    cell: string;
    stationName: string;
    shift: string;
    fromDate: string;
    toDate: string;
    createdDate: string;
    type: string;
    codeMulti: string;
    lastName: string;
}

export class IMultiAbility {
    stationId: string;
    ability: string;
}
