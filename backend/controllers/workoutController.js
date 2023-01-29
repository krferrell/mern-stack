const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

// get all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 })
    res.status(200).json(workouts);
}

// get workout
const getWorkout = async (req, res) => {
    const { id } = req.params;
    // Validate ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "No such workout" })
    }
    const workout = await Workout.findById(id);
    if (!workout) {
        return res.status(404).json({ error: "No such workout" })
    }
    res.status(200).json(workout);
}

// create workout
const createWorkout = async (req, res) => {
    const { title, reps, weight } = req.body;
    try {
        const workout = await Workout.create({
            title,
            reps,
            weight
        });
        res.status(200).json(workout);
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// delete workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params;
    // Validate ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "No such workout" })
    }
    const workout = await Workout.findOneAndDelete({ _id: id });

    if (!workout) {
        return res.status(400).json({ error: "No such workout" })
    }

    res.status(200).json(workout);
}

// update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such workout" })
    }
    const workout = await Workout.findOneAndUpdate({ _id: id }, {
        ...req.body
    });

    if (!workout) {
        return res.status(400).json({ error: "No such workout" })
    }

    res.status(200).json(workout);
}

module.exports = {
    createWorkout,
    getWorkout,
    getWorkouts,
    updateWorkout,
    deleteWorkout,
}