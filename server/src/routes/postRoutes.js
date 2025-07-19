const express = require('express');
const Post = require('../models/Post');
const auth = require('../middleware/auth');
const router = express.Router();

// Create a post (auth required)
router.post('/', auth, async (req, res) => {
  try {
    const { title, content, category, slug } = req.body;
    if (!title) return res.status(400).json({ error: 'Title is required' });
    if (!content) return res.status(400).json({ error: 'Content is required' });
    const post = await Post.create({ title, content, author: req.user.userId, category, slug });
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all posts (with optional category and pagination)
router.get('/', async (req, res) => {
  try {
    const { category, page = 1, limit = 10 } = req.query;
    const filter = category ? { category } : {};
    const posts = await Post.find(filter)
      .skip((page - 1) * limit)
      .limit(Number(limit));
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a post by ID
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

// Update a post by ID (auth required, must be author)
router.put('/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    if (post.author.toString() !== req.user.userId) {
      return res.status(403).json({ error: 'Forbidden: not the author' });
    }
    Object.assign(post, req.body);
    await post.save();
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a post by ID (auth required, must be author)
router.delete('/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    if (post.author.toString() !== req.user.userId) {
      return res.status(403).json({ error: 'Forbidden: not the author' });
    }
    await post.deleteOne();
    res.status(200).json({ message: 'Post deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router; 