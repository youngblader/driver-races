import { IRacer } from "../../../../store/reducers/racersReducer/types";

export interface RacerCardProps {
  item: IRacer;
  onPress: (screen: string, item: IRacer) => void;
};