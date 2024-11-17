import React, { useState } from 'react';

function FeedbackForm() {
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send feedback to the server or a third-party service
        alert('Feedback submitted: ' + feedback);
        setFeedback('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Your feedback"
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default FeedbackForm; 