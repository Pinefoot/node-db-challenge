const db = require('../data/dbConfig')

module.exports = {
    getAllProj,
    // addProj,
    // getTasks,
    // addTask
}

function getAllProj(){
   return db('projects')
}