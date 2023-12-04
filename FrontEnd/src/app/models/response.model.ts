export interface Predict {
    success:     boolean;
    status_code: number;
    data:        Data;
}

export interface Data {
    Results: Results;
}

export interface Results {
    output1: Output1;
}

export interface Output1 {
    type:  string;
    value: Value;
}

export interface Value {
    ColumnNames: string[];
    ColumnTypes: ColumnType[];
    Values:      Array<string[]>;
}

export enum ColumnType {
    Double = "Double",
    Int32 = "Int32",
    String = "String",
}
