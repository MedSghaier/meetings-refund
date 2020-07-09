import React from 'react';
import { connect } from 'react-redux';
import { setData } from '../../redux/meeting/meeting.actions';

const MeetingType = ({ id, setData }) => {
    
    const changeHandler = type => {
        if(type!==''){
            setData({id, type})
        }
    }

    return (
        <React.Fragment>
            <h3 className="mb-2 mt-5">Type de Réunion* : </h3>
            <input
                type="text"
                required
                className="form-control"
                placeholder="Meeting Type"
                onBlur={({ target: { value } }) => changeHandler(value)}
            />
        </React.Fragment>
    )
}

const mapDispatchToProps = dispatch => ({
    setData: (data) => dispatch(setData(data))
})

export default connect(null, mapDispatchToProps)(MeetingType);