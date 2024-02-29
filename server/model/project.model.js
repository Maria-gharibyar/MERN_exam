const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    name: { type: String, required: [true, "Name is required"], min: [3, "Name must be at least 3 characters long"] },
    Due: { type: Date, required: [true, "Due date is required"], min: [new Date(), "Due date must be in the future"] },
    state: { type: String, required: [true, "State is required"], default: "todo" }
}, { timestamps: true });

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
