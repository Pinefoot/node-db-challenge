const express = require('express')
const Resources = require('./resources-model')
const router = express.Router()

router.get('/', (req, res)=>{
    Resources.getAllResource()
    .then(resources =>{
        res.json(resources)
    }).catch(err =>{
        res.status(500).json({message: 'Could not retreive resources from database'})
    })
})

router.get('/:id',(req, res)=>{
    const {id} = req.params

    Resources.getResourceById(id)
    .then(resource =>{
        if(resource){
            res.json(resource)
        }else{
            res.status(404).json({message: 'Error adding to the resources'})
        }
    }).catch(err =>{
        res.status(500).json({message : 'Cant access the database for resources'})
    })
})

router.post('/', (req, res)=>{
    const resourceData = req.body
    Resources.addResource(resourceData)
    .then(resource =>{
        res.status(201).json({created: resource})
    })
    .catch(err =>{
        res.status(500).json({message: 'Failed to create new resource'})
    })
})

module.exports = router;