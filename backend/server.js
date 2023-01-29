require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');
const workoutRoutes = require('./routes/workouts');


const app = express();

// Middleware: runs on each request. Next() runs the actual requst.
app.use(express.json());
app.use(cors({
    origin: ['https://localhost:3000']
}));

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//routes
app.use('/api/workouts', workoutRoutes);

//Connects to the database before the server allows for requests. 
mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(process.env.PORT, () => {
        console.log('listening on port 4000')
    })
}).catch((err) => console.log(err))


