import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

function NoticeBoard() {
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        socket.on('noticeUpdate', (newNotice) => {
            setNotices((prevNotices) => [newNotice, ...prevNotices]);
        });

        return () => {
            socket.off('noticeUpdate');
        };
    }, []);

    return (
        <div>
            <h2>Notice Board</h2>
            <ul>
                {notices.map((notice) => (
                    <li key={notice.id}>
                        <h3>{notice.title}</h3>
                        <p>{notice.content}</p>
                        <small>{new Date(notice.date).toLocaleDateString()}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NoticeBoard; 