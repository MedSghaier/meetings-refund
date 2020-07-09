import React from 'react';
import { connect } from 'react-redux';
import * as uid from 'uuid/v4';
import { setMultipleData } from '../../redux/meeting/meeting.actions';

const MeetingTransportMeans = ({ id, setMultipleData }) => {
    let localId = uid();
    const changeHandler = ({ target: { name, value } }) => {
        if (value!==''){
            setMultipleData({id, name, value, targetField: 'transportMeans', localId} )
        }
    }
    
    return (
        <div className="row mb-3">
            <div className="col-lg-6">
                <input
                    onBlur={e => changeHandler(e)}
                    type="text"
                    placeholder="Transportation Means"
                    name="mean"
                    className="form-control" />
            </div>
            <div className="col-lg-6">
                <input
                    onBlur={e => changeHandler(e)}
                    type="number"
                    placeholder="Number of KM"
                    name="distance"
                    className="form-control" />
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setMultipleData: data => dispatch(setMultipleData(data))
})
export default connect(null, mapDispatchToProps)(MeetingTransportMeans);