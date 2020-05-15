const express = require('express')
const Proj = require('./projects-model')
const router = express.Router()

router.get('/', (req, res)=>{
    Proj.getAllProj()
    .then(projects =>{
        res.json(projects)
    }).catch(err =>{
        console.log('All projects list error', err)
        res.status(500).json({message: 'Could not retreive projects from database'})
    })
})

router.get('/:id',(req, res)=>{
    const {id} = req.params
    Proj.getProjById(id)
    .then(projects =>{
        if(projects){
            res.json(projects)
        }else{
            res.status(404).json({message: 'Could not find project with associated ID'})
        }
    }).catch(err =>{
        res.status(500).json({message: 'error conecting to database'})
    })
})

router.get('/:id/tasks', (req, res)=>{

})


router.post('/', (req, res)=>{
    const projectData = req.body
    Proj.addProj(projectData)
    .then(project =>{
        res.status(201).json({created: project })
    }).catch(err =>{
        res.status(500).json({message: 'Failed to create new project'})
    })
})
module.exports = router;