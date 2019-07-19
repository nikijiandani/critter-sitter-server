
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pet_types', function (table) {
    table.increments();
    table.string('name');
    table.string('icon');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pet_types');
};