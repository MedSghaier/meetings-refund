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
        <div className="box-element">
            <h3 className="mb-4 line-dash line-dash--white text-white">Type de Réunion* : </h3>
            <input
                type="text"
                required
                className="form-control"
                placeholder="Meeting Type"
                onBlur={({ target: { value } }) => changeHandler(value)}
            />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setData: (data) => dispatch(setData(data))
})

export default connect(null, mapDispatchToProps)(MeetingType);