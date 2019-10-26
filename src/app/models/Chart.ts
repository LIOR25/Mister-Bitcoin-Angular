interface marketValue {
  x: number;
  y: number;
}

export interface Chart {
  status: String;
  name: String;
  unit: String;
  period: String;
  description: String;
  values: Array<marketValue>;
}
