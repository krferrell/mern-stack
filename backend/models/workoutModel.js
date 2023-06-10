const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    date: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    exercises: [
      {
        name: String,
        repetitions: String,
        weight: String,
        rpe: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Workout', workoutSchema);
