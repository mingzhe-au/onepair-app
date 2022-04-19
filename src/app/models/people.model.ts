// export interface IPair {
//   mentorCity: string;
//   mentorEmail: string;
//   mentorFirst_name: string;
//   mentorGender: string;
//   mentorId: string;
//   mentorLast_name: string;
//   mentorRating: number;
//   menteeCity: string;
//   menteeEmail: string;
//   menteeFirst_name: string;
//   menteeGender: string;
//   menteeId: string;
//   menteeLast_name: string;
//   menteeRating: number;
// }

export interface IPair {
  pairId: string;
  mentor: IMentor;
  mentee: IMentee;
  score: number;
}

export interface IMentor extends IPerson {
  city: string;
  email: string;
  first_name: string;
  gender: string;
  id: string;
  last_name: string;
  rating: number;
  pairTime?: number
}

export interface IMentee extends IPerson {
  city: string;
  email: string;
  first_name: string;
  gender: string;
  id: string;
  last_name: string;
  rating: number;
  pairTime?: number
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

