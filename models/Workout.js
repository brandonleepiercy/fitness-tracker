const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [
            {
                type: {
                    type: String,
                    require: "Select the exercise type.",
                    trim: true
                },
                name: {
                    type: String,
                    required: "Exercise needs a name.",
                    trim: true
                },
                duration: {
                    type: Number,
                    required: "Enter the time spent, in minutes"
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]
    }
);

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;