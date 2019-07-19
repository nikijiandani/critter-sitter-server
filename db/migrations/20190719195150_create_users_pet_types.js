
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_pet_types', function (table) {
    table.increments();
    table.integer('user_id');
    table.integer('pet_type_id');
    table.foreign('user_id').references('id').inTable('users');
    table.foreign('pet_type_id').references('id').inTable('pet_types');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_pet_types');
};
