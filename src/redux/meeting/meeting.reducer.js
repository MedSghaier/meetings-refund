import MeetingActionTypes from './meeting.types';
import * as uid from 'uuid/v4';

const INTIAL_STATE = {
    meetings: [
        {
            id: uid(),
            title: 'Meeting 1',
            transportMeans : {
                count: 1,
                value: {}
            },
            transportFees: {
                count: 1,
                value:{}
            },
            accomFees: {
                count: 1,
                value: {}
            }
        }
    ],
    selectedMeetings: []
}
const meetingsReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case MeetingActionTypes.ADD_NEW_MEETING:
            return {
                ...state,
                meetings: [...state.meetings,
                {
                    id: uid(), 
                    title: action.payload,
                    transportMeans: {
                        count: 1,
                        value: {}
                    },
                    transportFees: {
                        count: 1,
                        value: {}
                    },
                    accomFees: {
                        count: 1,
                        value: {}
                    }
                }]
            }

        case MeetingActionTypes.ADD_MEETING_TO_SELECTED:
            
            return {
                ...state,
                selectedMeetings: state.selectedMeetings.indexOf(action.payload) === -1 ?
                                [...state.selectedMeetings, action.payload ] : 
                                [...state.selectedMeetings]
                
            }
        case MeetingActionTypes.REMOVE_MEETING_FROM_SELECTED:
            return {
                ...state,
                selectedMeetings: state.selectedMeetings.filter(item => item === action.payload)
            }
        case MeetingActionTypes.DELETE_MEETINGS:
            return {
                ...state,
                meetings: state.meetings.filter(item => !state.selectedMeetings.includes(item.id)),
                selectedMeetings: [],
            }
        case MeetingActionTypes.ADD_TRANS_FEES_COUNT:
            return {
                ...state,
                meetings: state.meetings.map(item => {
                    if (item.id === action.payload) {
                        return { ...item, transportFees: { ...item.transportFees , count: item.transportFees.count + 1  }  }
                    } else {
                        return item
                    }
                })
            }
        case MeetingActionTypes.ADD_TRANS_MEANS_COUNT:
            return {
                ...state,
                meetings: state.meetings.map(item => {
                    if (item.id === action.payload) {
                        return { ...item, transportMeans: { ...item.transportMeans, count: item.transportMeans.count + 1  } }
                    } else {
                        return item
                    }
                })
            }
        case MeetingActionTypes.ADD_ACCOM_FEES_COUNT:
            return {
                ...state,
                meetings: state.meetings.map(item => {
                    if (item.id === action.payload) {
                        return { ...item, accomFees: { ...item.accomFees, count: item.accomFees.count + 1 }}
                    } else {
                        return item
                    }
                })
            }
        case MeetingActionTypes.SET_DATA:
            return {
                ...state,
                meetings: state.meetings.map(item => {
                    if (item.id === action.payload.id) {
                        return { ...item, ...action.payload }
                    } else {
                        return item
                    }
                })
            }
        case MeetingActionTypes.SET_MULTIPE_DATA:
            const {id, targetField, name, value, localId} = action.payload;
            
            return {
                ...state,
                meetings: state.meetings.map(item => {
                    if (item.id === id) {
                        return { ...item, [targetField]: {
                            ...item[targetField],
                            value: {
                                ...item[targetField].value,
                                [localId]:{
                                    ...item[targetField].value[localId], [name]: value 
                                }
                            },
                        }}
                    } else {
                        return item
                    }
                })
            }
        default:
            return {
                ...state
            }
    }
}

export default meetingsReducer;