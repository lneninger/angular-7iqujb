export interface ISmartField {
  id: number;
  value: any;
  metadata: ISmartFieldMetadata;
}

export interface ISmartFieldMetadata {
  type: SmartFieldType;
}

export enum SmartFieldType {
  Text = 'TEXT',
  Check = 'CKECK',
  Radio = 'RADIO',
}
