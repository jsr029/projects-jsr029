const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    imageUrl: { 
        type: String, 
        required: [true, 'Image URL is required'], 
        trim: true 
    },
    title: { 
        type: String, 
        required: [true, 'Project title is required'], 
        trim: true 
    },
    appUrl: { 
        type: String, 
        required: [true, 'Application URL is required'], 
        trim: true 
    },
    techno: { 
        type: String, 
        required: [true, 'Technologies used are required'], 
        trim: true 
    },
    description: { 
        type: String, 
        required: [true, 'Project description is required'], 
        trim: true 
    },
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: [true, 'User ID is required'],
        index: true 
    }
}, { 
    timestamps: true // Automatically track createdAt and updatedAt
});

module.exports = mongoose.model('Project', ProjectSchema);