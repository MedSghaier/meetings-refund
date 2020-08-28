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
        <div className="box-element">
            <h3 className="mb-4 line-dash line-dash--white text-white">Time: </h3>
            <input
                type="text"
                className="form-control"
                placeholder="Meeting Hours"
                onBlur={({ target: { value } }) => changeHandler(value)}
            />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setData: data => dispatch(setData(data))
})
export default connect(null, mapDispatchToProps)(MeetingTime);