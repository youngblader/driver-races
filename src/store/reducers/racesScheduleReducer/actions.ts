import { getRacesSchedule } from "../../../services/races";
import { loadingRaces } from "./racesSchedule";

export const getRacesScheduleThunk = () => 
  async dispatch => {
    try {
      const response = await getRacesSchedule();
      
      dispatch(loadingRaces(response.data.MRData.RaceTable.Races))
    } catch (error) {
    return error;
  }
};