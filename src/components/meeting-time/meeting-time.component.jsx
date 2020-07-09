import React from 'react';
import { connect } from 'react-redux';
import { setData } from '../../redux/meeting/meeting.actions';

const MeetingTime = ({ id, setData }) => {

    const changeHandler = time => {
        if(time!==''){
            setData({id, time})
        }
    }
    return (
        <React.Fragment>
            <h3 className="mb-2 mt-5">Horaires: </h3>
            <input
                type="text"
                className="form-control"
                placeholder="Horaires de réunion"
                onBlur={({ target: { value } }) => changeHandler(value)}
            />
        </React.Fragment>
    )
}

const mapDispatchToProps = dispatch => ({
    setData: data => dispatch(setData(data))
})
export default connect(null, mapDispatchToProps)(MeetingTime);