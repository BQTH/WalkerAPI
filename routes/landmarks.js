const express = require('express');
const router = express.Router();
const Landmark = require('../models/Landmark');

//Get all landmarks
router.get('/', async (req, res) => {
    try{
        console.log("trying to get")
        const landmarks = await Landmark.find();
        console.log(landmarks)
        res.json(landmarks);
        
    }
    catch(err){
        console.log("failed to get")
        res.json({message: err});
        console.log(err)
    }
});

//Submit a landmark
router.post('/', async (req, res) => {
    const landmark = new Landmark({
        title: req.body.title,
        description: req.body.description
    });
    
    /* Check
    console.log("ready to save");
    console.log(
        post.title
    );*/
    
    try{
    const savedlandmark = await landmark.save();
    res.json(savedlandmark);
    } catch(err){
    res.json({message: err});
    }
});

//Get specific landmark
router.get('/:landmarkId', async (req, res) => {
    try{
        const landmark = await Landmark.findById(req.params.landmarkId);
        res.json(landmark);
    } catch(err) {
        res.json({message: err});
    }
});

//Update
router.patch('/:landmarkId', async (req,res) => {
    try {
        const updatedLandmark = await Landmark.updateOne({_id: req.params.landmarkId}, {$set: {title: req.body.title}});
        res.json(updatedLandmark);
    }
    catch(err) {
        res.json({message: err});
    }
    });

//Delete a landmark
router.delete('/:landmarkId', async (req,res) => {
    try{
        const removedLandmark = await Landmark.remove({_id: req.params.landmarkId});
        res.json(removedLandmark)
    }
    catch(err) {
        res.json({message: err})
    }
});

module.exports = router;