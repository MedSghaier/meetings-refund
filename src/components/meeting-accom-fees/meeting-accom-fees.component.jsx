import React from 'react';
import { connect } from 'react-redux';
import * as uid from 'uuid/v4';
import { setMultipleData } from '../../redux/meeting/meeting.actions';

const MeetingAcommFees = ({ id, setMultipleData }) => {

    let localId = uid();

    const changeHandler = ({ target: { name, value, files } }) => {
        if (value!==''){
            if(name==='bill'){
                setMultipleData({id, name, value : files[0], targetField: 'accomFees', localId} )
            }else {
                setMultipleData({id, name, value, targetField: 'accomFees', localId} )
            }
        }
    }

    return (
        <div className="row mb-3">
            <div className="col-lg-4">
                <input
                    onBlur={e => changeHandler(e)}
                    type="text"
                    placeholder="Accomodation type"
                    name="type"
                    className="form-control" />
            </div>
            <div className="col-lg-4">
                <input
                    onBlur={e => changeHandler(e)}
                    type="number"
                    placeholder="Amount"
                    className="form-control"
                    name="amount" />
            </div>
            <div className="col-lg-4">
                <input
                    onBlur={e => changeHandler(e)}
                    type="file"
                    className="form-control"
                    name="bill"
                    placeholder="Proof" />
            </div>
        </div>
    )
}

const mapDispatchToProps = diaptch => ({
    setMultipleData: data => diaptch(setMultipleData(data))
})
export default connect(null, mapDispatchToProps)(MeetingAcommFees);