// routes/project.js
const express = require('express');
const { put } = require('@vercel/blob');
const Project = require('../models/project');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

const router = express.Router();

// GET tous les projets
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.json(projects);
    } catch (err) {
        console.error('Erreur GET /api/projects:', err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// GET un projet par ID
router.get('/:id', async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ error: 'Projet non trouvé' });
        res.json(project);
    } catch (err) {
        console.error('Erreur GET /api/projects/:id:', err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// POST créer un projet (admin+)
router.post('/create', auth, auth.isAdmin, upload.single('image'), async (req, res) => {
    try {
        if (!req.file) return res.status(400).json({ error: 'Image requise' });

        const { url } = await put(`projects/${Date.now()}-${req.file.originalname}`, req.file.buffer, {
            access: 'public',
            token: process.env.BLOB_READ_WRITE_TOKEN // Ajoute cette variable dans Vercel
        });

        const { title, appUrl, techno, description } = req.body;

        const newProject = new Project({
            imageUrl: url,
            title,
            appUrl,
            techno,
            description,
            userId: req.user.id
        });

        const project = await newProject.save();
        res.status(201).json(project);
    } catch (err) {
        console.error('Erreur POST /create:', err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// PUT modifier un projet
router.put('/edit/:id', auth, auth.isAdmin, upload.single('image'), async (req, res) => {
    try {
        const updates = {
            title: req.body.title,
            appUrl: req.body.appUrl,
            techno: req.body.techno,
            description: req.body.description
        };

        if (req.file) {
            const { url } = await put(`projects/${Date.now()}-${req.file.originalname}`, req.file.buffer, {
                access: 'public',
                token: process.env.BLOB_READ_WRITE_TOKEN
            });
            updates.imageUrl = url;
        }

        const project = await Project.findByIdAndUpdate(
            req.params.id,
            updates,
            { new: true }
        );

        if (!project) return res.status(404).json({ error: 'Projet non trouvé' });
        res.json(project);
    } catch (err) {
        console.error('Erreur PUT /edit/:id:', err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// DELETE supprimer un projet
router.delete('/:id', auth, auth.isAdmin, async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);
        if (!project) return res.status(404).json({ error: 'Projet non trouvé' });

        // Optionnel : supprimer le blob (nécessite le handle du blob)
        // await del(project.imageUrl);

        res.json({ msg: 'Projet supprimé' });
    } catch (err) {
        console.error('Erreur DELETE /:id:', err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

module.exports = router;