const express = require('express');
const mongoose = require('mongoose');
const noticeRoutes = require('./routes/notices');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/gayacollegegaya', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use('/api/notices', noticeRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}); 