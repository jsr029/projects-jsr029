const express = require('express');
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
  const imageUrl = `/uploads/${req.file.filename}`;
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
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : undefined;

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

      if (req.file && project.imageUrl) {
          fs.unlink(path.join(__dirname, '..', project.imageUrl), (err) => {
              if (err) console.error('Failed to delete old image:', err);
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
              if (err) console.error('Failed to delete image:', err);
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
