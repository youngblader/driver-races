import { ActionTypes, IRacers } from "./types";

const initialState: IRacers = {
  racers: [],
  total: 0,
};

const racersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_RACERS:
      const data = action.payload;

      return {
        ...state,
        racers: data.DriverTable.Drivers,
        total: data.total,
      };

    default:
      return state;
  }
};

export const loadingRacers = payload => {
  return {
    type: ActionTypes.GET_RACERS,
    payload,
  };
};

export default racersReducer;