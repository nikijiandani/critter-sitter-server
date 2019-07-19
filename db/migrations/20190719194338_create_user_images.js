
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_images', function (table) {
    table.increments();
    table.integer('user_id');
    table.string('image');
    table.foreign('user_id').references('id').inTable('users');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_images');
};