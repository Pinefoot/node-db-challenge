
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl =>{
        tbl.increments();
        tbl.string('proj_name', 128).notNullable().unique()
        tbl.string('proj_description', 128)
        tbl.boolean('completed').defaultTo(false)
    })
    .createTable('tasks', tbl=>{
        tbl.increments();
        tbl.string('task_name', 128)
        tbl.string('task_description').notNullable()
        tbl.string('task_notes', 128)
        tbl.boolean('completed').defaultTo(false)
        tbl.integer('proj_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
    .createTable('resources', tbl=>{
        tbl.increments();
        tbl.string('resources_name', 128).notNullable().unique()
        tbl.string('resources_description', 128)
        tbl.boolean('in_use').defaultTo(false)

    })
    .createTable('project_resources', tbl=>{
        tbl.increments();
        //foreign key that connects to the projects table
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        //foreign key that connects to the resources table
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
};
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
};
