const mongoose = require('../db');

const photoSchema = new mongoose.Schema({
    title: String,
    url: String,
    published: String,
    author: String,
    date_taken: String
});

const Photo = mongoose.model('Photo', photoSchema);
module.exports = Photo;
