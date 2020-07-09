import MeetingActionTypes from './meeting.types';

export const addNewMeeting = title =>({
    type: MeetingActionTypes.ADD_NEW_MEETING,
    payload: title
})

export const addMeetingToSelected = id => ({
    type: MeetingActionTypes.ADD_MEETING_TO_SELECTED,
    payload: id
})
export const removeMeetingFromSelected = id => ({
    type: MeetingActionTypes.REMOVE_MEETING_FROM_SELECTED,
    payload: id
})
export const deleteMeetings = () => ({
    type: MeetingActionTypes.DELETE_MEETINGS
})

export const addTransMeansCount = id => ({
    type: MeetingActionTypes.ADD_TRANS_MEANS_COUNT,
    payload: id
})

export const addTransFeesCount = id => ({
    type: MeetingActionTypes.ADD_TRANS_FEES_COUNT,
    payload: id
})

export const addAccomFeesCount = id =>({
    type: MeetingActionTypes.ADD_ACCOM_FEES_COUNT,
    payload: id
})

export const setData = (rowData) => ({
    type: MeetingActionTypes.SET_DATA,
    payload: rowData
})

export const setMultipleData = data => ({
    type: MeetingActionTypes.SET_MULTIPE_DATA,
    payload: data
})