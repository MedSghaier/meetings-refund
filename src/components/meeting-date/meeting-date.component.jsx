import React, { useState } from 'react'
import { connect } from 'react-redux';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import './meeting-date.styles.scss';
import { setData } from '../../redux/meeting/meeting.actions';

const MeetingDate = ({ id, setData }) => {
    const [meetingDate, setMeetingDate] = useState(new Date());

    const changeHandler = retrievedDate => {
        let d = new Date(retrievedDate);
        let resultDate = `${d.getDate() < 10 ? '0' + d.getDate() : d.getDate()}/${d.getMonth() < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1}/${d.getFullYear()}`

        setData({id, date: resultDate})
    }
    return (
        <div className="box-element">
            <h3 className="mb-4 line-dash line-dash--white text-white">Meeting date* :</h3>
            <DatePicker
                selected={meetingDate}
                dateFormat="dd/MM/yyyy"
                strictParsing
                required
                onChange={date => { setMeetingDate(date); changeHandler(date) }}
                className="form-control" />
        </div>
    )
}

const mapDispatchTopProps = dispatch => ({
    setData : (date) => dispatch(setData(date))
}) 

export default connect(null, mapDispatchTopProps)(MeetingDate);