export interface IPair {
  mentor: IMentor;
  mentee: IMentee;
}

export interface IMentor extends IPerson{
  city: string;
  email: string;
  first_name: string;
  gender: string;
  id: string;
  last_name: string;
  rating: number;
}

export interface IMentee extends IPerson{
  city: string;
  email: string;
  first_name: string;
  gender: string;
  id: string;
  last_name: string;
  rating: number;
}

export interface IPerson {
  city: string;
  email: string;
  first_name: string;
  gender: string;
  id: string;
  last_name: string;
  rating: number;
}

export enum PairedStatus {
  Paired = 'PAIRED',
  Unpaired = 'UNPAIRED'
}

