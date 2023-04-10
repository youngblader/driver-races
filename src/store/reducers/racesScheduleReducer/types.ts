
export enum ActionTypes {
  GET_RACES = 'GET_RACES',
};

export interface IRacesSchedule {
  schedule: IRace[]
};

export interface IRace {
  Circuit: { Location: []; circuitId: string; circuitName: string; url: string };
  FirstPractice: { date: string; time: string };
  Qualifying: { date: string; time: string };
  SecondPractice: { date: string; time: string };
  ThirdPractice: { date: string; time: string };
  date: string;
  raceName: string;
  round: number | string;
  season: string;
  time: string;
  url: string;
}
