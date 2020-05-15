const db = require('../data/dbConfig')

module.exports = {
    getAllProj,
    getProjById,
    addProj,
        getTasks,
        addTasks,
            getProjResources,
            addProjResources
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

function getProjResources(project_id){
    return db('project_resources')
    .join('projects', 'projects.id', 'project_resources.project_id' )
    .join('resources', 'resources.id', 'project_resources.resource_id' )
    .select('projects.proj_name', 'resources.resources_name', 'resources.resources_description', 'resources.id', 'projects.id')
    .where({project_id})
}

function addProjResources(projects){
    return db('resources')
    .insert(projects, 'id')
    .then(ids =>{
        return getProjResources(ids[0])
    })
}