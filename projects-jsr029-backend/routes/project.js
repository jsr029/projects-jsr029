const express = require('express');
const fs = require('fs');
const path = require('path');
const Project = require('../models/project');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

const router = express.Router();

router.get('/', async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
});

router.post('/create', auth, auth.isAdmin, upload.single('image'), async (req, res) => {
    const { title, appUrl, techno, description } = req.body;
    const imageUrl = `/images/${req.file.filename}`;
    const newProject = new Project({
        imageUrl,
        title,
        appUrl,
        techno,
        description,
        userId: req.user.id
    });
    const project = await newProject.save();
    res.json(project);
});

router.get('/:id', async (req, res) => {
    const project = await Project.findById(req.params.id);
    if (!project) {
        return res.status(404).send({ error: 'Project not found.' });
    }
    res.json(project);
});

router.put('/:id', auth, auth.isAdmin, upload.single('image'), async (req, res) => {
    const { title, appUrl, techno, description } = req.body;
    const imageUrl = req.file ? `/images/${req.file.filename}` : undefined;

    const updatedData = {
        title,
        appUrl,
        techno,
        description,
    };

    if (imageUrl) {
        updatedData.imageUrl = imageUrl;
    }

    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).send({ error: 'Project not found.' });
        }

        // Check if there is an existing image and delete it if it exists
        if (project.imageUrl && req.file) {
            const oldImagePath = path.join(__dirname, '..', project.imageUrl);
            fs.unlink(oldImagePath, (err) => {
                if (err && err.code !== 'ENOENT') {
                    console.error('Failed to delete old image:', err);
                } else if (err && err.code === 'ENOENT') {
                    console.warn('Old image not found, continuing to upload new one.');
                }

                // Ensure the new image path directory exists
                const newImagePath = path.join(__dirname, '..', imageUrl);
                fs.mkdir(path.dirname(newImagePath), { recursive: true }, (err) => {
                    if (err) {
                        console.error('Failed to create directory for new image:', err);
                    } else {
                        // Copy new image to the destination directory
                        fs.copyFile(req.file.path, newImagePath, (err) => {
                            if (err) {
                                console.error('Failed to copy new image:', err);
                            }
                        });
                    }
                });
            });
        }

        const updatedProject = await Project.findByIdAndUpdate(req.params.id, updatedData, { new: true });
        res.json(updatedProject);
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Server error' });
    }
});

router.delete('/:id', auth, auth.isAdmin, async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).send({ error: 'Project not found.' });
        }

        if (project.imageUrl) {
            fs.unlink(path.join(__dirname, '..', project.imageUrl), (err) => {
                if (err && err.code !== 'ENOENT') {
                    console.error('Failed to delete image:', err);
                } else if (err && err.code === 'ENOENT') {
                    console.warn('Image not found, nothing to delete.');
                }
            });
        }

        await Project.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Project deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Server error' });
    }
});

module.exports = router;
