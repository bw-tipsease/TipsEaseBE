exports.up = function(knex, Promise) {
    return knex.schema.createTable("services", services => {
      services.increments();
      
      services.string("service_type", 255).notNullable().unique();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("services");
  };