const express = require('express');
const app = express();
const port = 3000;
const userRouter = require('./routes/userRouter');
const blogRouter = require('./routes/blogRouter');
const callbackRouter = require("./routes/callbackRouter.js")
const bodyParser = require('body-parser');
const cors = require('cors');

const connectDB = require('./utils/connectDB');
require('dotenv').config();

connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/admin', userRouter);
// app.use('/api/jobs/', jobOpeningRouter);
app.use('/api/blogs', blogRouter);
app.use('/api/callbacks', callbackRouter);
// app.use('/api/services', serviceRouter);



app.listen(port, () => { 
    console.log("Server is running on port " + port);
});