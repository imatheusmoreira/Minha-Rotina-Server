const mongoose = require('mongoose')

const currentTasksSchema = new mongoose.Schema({
    task_id: { type: String, required: true }, //Task ID
    user_uid: { type: String, required: true }, //UID
    expected_time: { type: Number },
    completed_time: { type: Number, required: false, default: 0 },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CurrentTask', currentTasksSchema, 'currentTasks')