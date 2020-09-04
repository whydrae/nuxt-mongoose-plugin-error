const mongoose = require('mongoose')
const mongooseIntl = require('mongoose-intl')
const Schema = mongoose.Schema

const blogSchema = new Schema({
  title: { type: String, intl: true },
  author: String,
  body: String
})

blogSchema.plugin(mongooseIntl, { languages: ['en', 'de', 'fr'], defaultLanguage: 'en' })

module.exports = mongoose.model('Blog', blogSchema, 'blog')
