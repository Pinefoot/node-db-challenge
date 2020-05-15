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

})

router.get('/:id/tasks', (req, res)=>{

})

module.exports = router;