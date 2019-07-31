exports.up = function(knex, Promise) {
    return knex.schema.createTable("workers", workers => {
      workers.increments();
      workers
        .integer('services_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('services')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

      workers.string("name", 255).notNullable();
      workers.string("tagline", 255).notNullable();
      workers.string("worker_info", 255).notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("workers");
  };