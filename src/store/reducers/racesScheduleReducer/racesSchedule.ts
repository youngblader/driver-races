import { ActionTypes, IRacesSchedule } from "./types";

const initialState: IRacesSchedule = {
  schedule: [],
};

const racesScheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_RACES:
      return {
        ...state,
        schedule: action.payload,
      };

    default:
      return state;
  }
};

export const loadingRaces = payload => {
  return {
    type: ActionTypes.GET_RACES,
    payload,
  };
};

export default racesScheduleReducer;