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
        <React.Fragment>
            <h3 className="mb-2">Lieu</h3>
            <input
                type="text"
                name="field[0].content[subfield].value"
                className="form-control"
                placeholder="Lieu de réunion"
                onBlur={({ target: { value } }) => changeHandler(value)}
            />
        </React.Fragment>
    )
}

const mapDispatchTopProps = dispatch => ({
    setData: (date) => dispatch(setData(date))
})

export default connect(null, mapDispatchTopProps)(MeetingPlace);