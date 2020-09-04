const { Router } = require('express')
const Blog = require('../models/blog')
const router = Router()

// Test route
router.use('/test', (req, res) => {
  res.end('Test API!')
})

module.exports = router
