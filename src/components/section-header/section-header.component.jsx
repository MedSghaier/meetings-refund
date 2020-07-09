import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addNewMeeting } from '../../redux/meeting/meeting.actions'
import Button from '../button/button.component';

const SectionHeader = ({ addNewMeeting }) => {
    const [title, setTitle] = useState('');

    const addHandler = () => {
        if (title !== '') {
            addNewMeeting(title);
            setTitle('');
        }
    }
    return (
        <div className="row mb-5">
            <div className="col-lg-10">
                <input
                    type="text"
                    name="meeting"
                    className="form-control form-control--dark"
                    placeholder="New meeting name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="col-lg-2">
                <Button className="btn--tertiary btn--tertiary-etha" onClick={addHandler}>
                    <i className="ico-plus"></i>
                    <span>Add a new meeting</span>
                </Button>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addNewMeeting: (title) => dispatch(addNewMeeting(title))
})

export default connect(null, mapDispatchToProps)(SectionHeader);