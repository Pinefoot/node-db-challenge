const db = require('../data/dbConfig')

module.exports = {
    getAllResource,
    addResource,
    getResourceById
}
//adding resources.
//retrieving a list of resources.

function getAllResource(){
    return db('resources')
}

function getResourceById(id){
    return db('resources').where({id}).first()
}

function addResource(resource){
    return db('resources')
    .insert(resource, 'id')
    .then(ids =>{
        return getResourceById(ids[0])
    })
}