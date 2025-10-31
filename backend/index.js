const express = require('express');
const app = express();
const port = 4000;
const userRouter = require('./routes/userRouter');
const jobOpeningRouter = require('./routes/jobOpeningRouter');
const blogRouter = require('./routes/blogRouter');
const serviceRouter = require('./routes/serviceRouter');
const bodyParser = require('body-parser');
const cors = require('cors');

const connectDB = require('./utils/connectDB');
require('dotenv').config();

connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/admin', userRouter);
app.use('/api/jobs/', jobOpeningRouter);
app.use('/api/blogs', blogRouter);
app.use('/api/services', serviceRouter);



app.listen(port, () => { 
    console.log("Server is running on port " + port);
});