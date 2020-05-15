const db = require('../data/dbConfig')

module.exports = {
    getAllProj,
    getProjById,
     addProj,
    getTasks,
    addTasks
}

function getAllProj(){
   return db('projects')
}

function getProjById(id){
    return db('projects').where({id}).first()
}

function addProj(project){
    return db('projects')
    .insert(project, 'id')
    .then(ids =>{
        return getProjById(ids[0])
    })
}

function getTasks(proj_id){
    return db('tasks')
    .join('projects', 'tasks.proj_id', 'projects.id' )
    .select('projects.proj_name', 'tasks.id', 'tasks.task_name', 'tasks.task_description', 'tasks.task_notes', 'tasks.completed', 'tasks.proj_id')
   
    .where({proj_id})
}

function addTasks (proj_id){
    return db('tasks')
    .insert(proj_id, 'id')
    .then(ids =>{
        return getTasks(ids[0])
    })
}