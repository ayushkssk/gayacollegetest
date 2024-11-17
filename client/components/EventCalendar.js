import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

function EventCalendar() {
    return (
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={[
                { title: 'Event 1', date: '2023-11-01' },
                { title: 'Event 2', date: '2023-11-15' }
            ]}
        />
    );
}

export default EventCalendar; 