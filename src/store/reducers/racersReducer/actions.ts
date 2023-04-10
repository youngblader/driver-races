import { getRacers } from "../../../services/racers";
import { loadingRacers } from "./racersReducer";

export const getRacersThunk = (limit: number, offset: number) => 
async dispatch => {
  try {
    const response = await getRacers(limit, offset);
    dispatch(loadingRacers(response.data.MRData))
  } catch (error) {
    return error;
  }
};