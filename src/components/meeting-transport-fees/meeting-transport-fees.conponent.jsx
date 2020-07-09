import React from 'react';
import {connect} from 'react-redux';
import * as uid from 'uuid/v4';
import { setMultipleData } from '../../redux/meeting/meeting.actions';


const MeetingTransportFees = ({ id, setMultipleData }) => {
    let localId = uid();

    const changeHandler = ({ target: { name, value, files } }) => {
        if (value!==''){
            if(name==='bill'){
                setMultipleData({id, name, value : files[0], targetField: 'transportFees', localId} )
            }else {
                setMultipleData({id, name, value, targetField: 'transportFees', localId} )
            }
        }
    }
    return (
        <div className="row mb-3">
            <div className="col-lg-4">
                <input
                    onBlur={e => changeHandler(e)}
                    type="text"
                    name="type"
                    placeholder="Type de frais"
                    className="form-control" />
            </div>
            <div className="col-lg-4">
                <input
                    onBlur={e => changeHandler(e)}
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    className="form-control" />
            </div>
            <div className="col-lg-4">
                <input
                    onBlur={e => changeHandler(e)}
                    type="file"
                    name="bill"
                    className="form-control"
                    placeholder="Proof" />
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setMultipleData: data => dispatch(setMultipleData(data))
})
export default connect(null, mapDispatchToProps)(MeetingTransportFees);