const router = require('express').Router();
const multer = require('multer');
const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');


let Event = require('../models/Event');


/**
 * Set up multer for file upload
 * upload files to public/ directory
 */
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

let upload = multer({ storage });


/**
 * CRUD methods for Event model
 */
router.get('/', (req, res) => {
  Event.find(req.query)
    .then(events => res.json(events))
    .catch(err => res.status(400).json('Error: ', err));
});


router.post('/', upload.single('image'), (req, res) => {
  const newEvent = new Event({
    name: req.body.name,
    img: req.file.originalname,
  })
    .save()
    .then(() => res.json('Adding new event'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.get('/:id', (req, res) => {
  Event.findById(req.params.id)
    .then(event => res.json(event))
    .catch(err => res.status(400).json('Error: ' + err))
})


router.delete('/:id', (req, res) => {
  Event.findByIdAndDelete(req.params.id)
    .then(() => res.json('Event was deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
