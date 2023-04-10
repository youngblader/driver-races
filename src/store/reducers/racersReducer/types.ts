export enum ActionTypes {
  GET_RACERS = 'GET_RACERS',
  UPDATE_RACERS = 'UPDATE_RACERS',
};

export interface IRacers {
  racers: IRacer[];
  total: number;
};

export interface IRacer {
  code: string,
  dateOfBirth: string,
  driverId: string,
  familyName: string,
  givenName: string,
  nationality: string,
  permanentNumber: number | string,
  url: string,
};