import { combineReducers } from 'redux';
import meetingReducer from './meeting/meeting.reducer';

const rootReducer = combineReducers({
    meetings: meetingReducer
})

export default rootReducer;