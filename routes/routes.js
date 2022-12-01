const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const Model = require('../module/module')


//post method
router.post('/createPost',async (req,res)=>{
    // res.send("Post created")
    const newPost = new Model({
        title : req.body.title,
        author : req.body.author,
        content : req.body.content
    })

    try{
        const result = await newPost.save();
        res.status(200).json(result)
    }catch(error){
        res.status(400).json({message : error.message})
    }
});
//get
router.get('/getALLPost',async (req,res)=>{
    try{
        const result = await Model.find();
        res.status(200).json(result)
    }
    catch(error){
        res.status(500).json({message : error.message})
    }
    res.send("ALL POST DATA :-")
})

router.get('/getPost/:id', (req,res)=>{
    const id = req.params.id
    res.send(`Post data with id ${id}`)
})

//patch
router.patch('/editPost/:id', (req,res)=>{
    const id = req.params.id
    res.send(`Edit Post data with id ${id}`)
})

//delete
router.delete('/deletePost/:id', (req,res)=>{
    const id = req.params.id
    res.send(`Delete Post data with id ${id}`)
})


module.exports = router;