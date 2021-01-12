const db = require("../models");

module.exports = (app) => {
    app.get("/api/workouts", (req, res) => {
        db.Workout.find()
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err)
        });
    });

    app.post("/api/workouts", (req, res) => {
        db.Workout.create(req.body)
        .then(dbWorkout => {
            res.json("Saved");
        })
        .catch(({message}) => {
            res.json(message);
        });
    });

    app.put("/api/workouts/:id", (req, res) => {
        console.log(req.params.id);
        db.Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}})
        .then(dbWorkout => {
            console.log(dbWorkout);
            res.json("Saved")
        })
        .catch(({message}) => {
            console.log(message);
            res.json(message);
        });
    });

    app.get ("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });
};