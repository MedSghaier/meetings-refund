import React, { useState } from 'react';
import { connect } from 'react-redux';
import MeetingDate from '../meeting-date/meeting-date.component';
import MeetingType from '../meeting-type/meeting-type.component';
import MeetingTime from '../meeting-time/meeting-time.component';
import MeetingPlace from '../meeting-place/meeting-place.component';
import { addMeetingToSelected, removeMeetingFromSelected, addTransMeansCount, addTransFeesCount, addAccomFeesCount } from '../../redux/meeting/meeting.actions';
import MeetingTransportMeans from '../meeting-transport-means/meeting-transport-means.component';
import MeetingTransportFees from '../meeting-transport-fees/meeting-transport-fees.conponent';
import MeetingAcommFees from '../meeting-accom-fees/meeting-accom-fees.component';
import Button from '../button/button.component';
import { Collapse } from 'react-collapse';
import './meeting-details.styles.scss'


const MeetingDetails = (
    { meeting: { title, id, transportMeans, transportFees, accomFees },
        addMeetingToSelected, removeMeetingFromSelected, addTransMeansCount, addTransFeesCount, addAccomFeesCount }) => {

    const checkboxStyle = {
        position: 'absolute',
        top: '25px',
        right: '20px',
    }
    const onCheckChangeHandler = (e) => {
        e.target.checked ? addMeetingToSelected(id) : removeMeetingFromSelected(id)
    }

    const [collapseState, setCollapseState] = useState(false);

    return (
        <div className="container mb-5">
            {/* MEETING TITLE */}
            <div className="row row-spacing">
                <div className="col-6">
                    <h2 className="line-dash line-dash--etha" style={{cursor:'pointer'}} onClick={()=>setCollapseState(!collapseState)}>{title} (click to expand)</h2>
                    <input type="checkbox" name="delete" onChange={onCheckChangeHandler} style={checkboxStyle} />
                </div>
            </div>
            {/* END MEETING TITLE */}

            <Collapse isOpened={collapseState} >
                {/* Signle Entry data -- Date + Place + Type + Time */}
                <div className="row row-spacing align-items-baseline mb-5">
                    <div className="col-lg-6 col-12">
                        <MeetingDate id={id} />
                        <MeetingType id={id} />
                    </div>
                    <div className="col-lg-6 col-12">
                        <MeetingPlace id={id} />
                        <MeetingTime id={id} />
                    </div>
                </div>
                {/* END SIGNLE ENTRY DATA */}

                {/* MULTY ENTRY DATA -- Accomodation + Transport + Distance */}
                <div className="box-element">
                    <h3 className="mb-4 line-dash line-dash--white text-white">Transportation means</h3>
                    <div className="row">
                    <div className="col-auto">
                        <Button className="btn-badge btn-badge--beta" onClick={() => addTransMeansCount(id)}>+</Button>
                    </div>
                    <div className="col">
                        {
                            [...new Array(transportMeans.count)].map((el, idx) => <MeetingTransportMeans key={idx} id={id} />)
                        }
                    </div>
                </div>
                </div>

                <div className="box-element">
                    <h3 className="mb-4 line-dash line-dash--white text-white">Transportation fees</h3>
                    <div className="row">
                        <div className="col-auto">
                            <Button className="btn-badge btn-badge--beta" onClick={() => addTransFeesCount(id)}>+</Button>
                        </div>
                        <div className="col">
                            {
                                [...new Array(transportFees.count)].map((el, idx) => <MeetingTransportFees key={idx} id={id} />)
                            }
                        </div>
                    </div>
                </div>

                <div className="box-element">
                    <h3 className="mb-4 line-dash line-dash--white text-white">Accomodation fees</h3>
                    <div className="row">
                        <div className="col-auto">
                            <Button className="btn-badge btn-badge--beta" onClick={() => addAccomFeesCount(id)}>+</Button>
                        </div>
                        <div className="col">
                            {
                                [...new Array(accomFees.count)].map((el, idx) => <MeetingAcommFees key={idx} id={id} />)
                            }
                        </div>
                    </div>
                </div>
            </Collapse>

            {/* END MULTY ENTRY DATA */}
            <div className="leaf-line"></div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addMeetingToSelected: id => dispatch(addMeetingToSelected(id)),
    removeMeetingFromSelected: id => dispatch(removeMeetingFromSelected(id)),
    addTransMeansCount: id => dispatch(addTransMeansCount(id)),
    addTransFeesCount: id => dispatch(addTransFeesCount(id)),
    addAccomFeesCount: id => dispatch(addAccomFeesCount(id))

})
export default connect(null, mapDispatchToProps)(MeetingDetails);