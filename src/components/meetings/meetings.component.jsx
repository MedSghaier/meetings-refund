import React from 'react';
import { connect } from 'react-redux';
import './table.style.scss';
import SectionHeader from '../section-header/section-header.component';
import MeetingDetails from '../meeting-details/meeting-details.component';
import { deleteMeetings } from '../../redux/meeting/meeting.actions';
import Button from '../button/button.component';

const Meetings = ({ meetings, selectedMeetings, deleteMeetings }) => {

    return (
        <div className="container">
            <div className="row mb-5">
                <div className="col-6"><h1 className="line-dash">Meetings</h1></div>
            </div>
            <SectionHeader />
            {
                meetings.map(meeting => <MeetingDetails meeting={meeting} key={meeting.id}/>)
            }
            <Button 
                onClick={deleteMeetings}
                className="btn--tertiary btn--tertiary-beta mt-5">
                    Delete Meetings { `(${selectedMeetings.length})` }
            </Button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    meetings: state.meetings.meetings,
    selectedMeetings: state.meetings.selectedMeetings
})

const mapDispatchToProps = dispatsh => ({
    deleteMeetings: () => dispatsh(deleteMeetings())
})

export default connect(mapStateToProps,mapDispatchToProps)(Meetings);