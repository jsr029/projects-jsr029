const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    imageUrl: { type: String, required: true },
    title: { type: String, required: true },
    appUrl: { type: String, required: true },
    techno: { type: String, required: true },
    description: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);