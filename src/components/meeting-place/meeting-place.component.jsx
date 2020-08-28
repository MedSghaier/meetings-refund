import React from 'react';
import { connect } from 'react-redux';
import { setData } from '../../redux/meeting/meeting.actions';

const MeetingPlace = ({ id, setData }) => {

    const changeHandler = place => {
        if(place!==''){
            setData({id, place})
        }
    }
    return (
        <div className="box-element">
            <h3 className="mb-4 line-dash line-dash--white text-white">Place</h3>
            <input
                type="text"
                name="field[0].content[subfield].value"
                className="form-control"
                placeholder="Meeting Location"
                onBlur={({ target: { value } }) => changeHandler(value)}
            />
        </div >
    )
}

const mapDispatchTopProps = dispatch => ({
    setData: (date) => dispatch(setData(date))
})

export default connect(null, mapDispatchTopProps)(MeetingPlace);