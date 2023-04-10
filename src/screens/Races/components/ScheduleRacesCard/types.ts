export interface ScheduleRacesCardProps {
  item: IScheduleRace
};

export interface IScheduleRace {
  Circuit?: { Location: []; circuitId: string; circuitName: string; url: string };
  FirstPractice?: { date: string; time: string };
  Qualifying?: { date: string; time: string };
  SecondPractice?: { date: string; time: string };
  ThirdPractice?: { date: string; time: string };
  date: string;
  raceName: string;
  round: number | string;
  season: string;
  time?: string;
  url?: string;
};