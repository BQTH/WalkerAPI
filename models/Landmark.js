const mongoose = require('mongoose');

const LandmarkSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        /*type: Number,
        required: true,
        validate: {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        }*/
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    lon: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Landmark', LandmarkSchema);