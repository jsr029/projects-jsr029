const express = require('express');
const fs = require('fs');
const path = require('path');
const Project = require('../models/project');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        console.error('Error fetching projects:', err);
        res.status(500).send({ error: 'Server error' });
    }
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

    try {
        const project = await newProject.save();
        res.json(project);
    } catch (err) {
        console.error('Error creating project:', err);
        res.status(500).send({ error: 'Server error' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).send({ error: 'Project not found.' });
        }
        res.json(project);
    } catch (err) {
        console.error('Error fetching project:', err);
        res.status(500).send({ error: 'Server error' });
    }
});

router.put('/edit/:id', auth, auth.isAdmin, upload.single('image'), async (req, res) => {
    const { title, appUrl, techno, description } = req.body;
    const imageUrl = req.file ? `/images/${req.file.filename}` : undefined;
    const updatedData = { title, appUrl, techno, description };

    if (imageUrl) {
        updatedData.imageUrl = imageUrl;
    }

    try {
        console.log(`Updating project with ID: ${req.params.id}`);
        const project = await Project.findById(req.params.id);
        if (!project) {
            console.error(`Project with ID ${req.params.id} not found.`);
            return res.status(404).send({ error: 'Project not found.' });
        }

        console.log(`Found project: ${project}`);
        const updatedProject = await Project.findByIdAndUpdate(req.params.id, updatedData, { new: true });
        res.json(updatedProject);
    } catch (err) {
        console.error('Error updating project:', err);
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
        console.error('Error deleting project:', err);
        res.status(500).send({ error: 'Server error' });
    }
});

module.exports = router;
