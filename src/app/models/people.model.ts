export interface IMentor {
  city: string;
  email: string;
  first_name: string;
  gender: string;
  id: string;
  last_name: string;
  rating: number;
  pairStatus?: PairedStatus
}

export interface IMentee {
  city: string;
  email: string;
  first_name: string;
  gender: string;
  id: string;
  last_name: string;
  rating: number;
  pairStatus?: PairedStatus
}

export enum PairedStatus {
  Paired = 'PAIRED',
  Unpaired = 'UNPAIRED'
}

