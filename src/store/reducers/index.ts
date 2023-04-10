import { combineReducers } from 'redux';
import racersReducer from './racersReducer/racersReducer';
import racesScheduleReducer from './racesScheduleReducer/racesSchedule';

export default combineReducers({
  racers: racersReducer,
  schedule: racesScheduleReducer,
});
