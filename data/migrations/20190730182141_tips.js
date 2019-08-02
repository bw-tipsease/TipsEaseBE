exports.up = function(knex, Promise) {
    return knex.schema.createTable('tips', tips => {
      tips.increments();
  
      tips
        .integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users');
      tips
        .integer('worker_id')
        .notNullable()
        .references('id')
        .inTable('workers');
      tips.float('amount').notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('tips');
  };