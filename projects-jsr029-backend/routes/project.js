const express = require('express');
const Project = require('../models/project');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

const router = express.Router();

router.get('/', async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
});

router.post('/', auth, auth.isAdmin, upload.single('image'), async (req, res) => {
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

    const project = await Project.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    res.json(project);
});

router.delete('/:id', auth, auth.isAdmin, async (req, res) => {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Project deleted' });
});

module.exports = router;
