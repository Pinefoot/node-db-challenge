const db = require('../data/dbConfig')

module.exports = {
    getAllProj,
    getProjById,
     addProj,
    // getTasks,
    // addTask
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