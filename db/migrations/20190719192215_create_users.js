
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.integer('role');
    table.string('first_name');
    table.string('last_name');
    table.string('email');
    table.string('phone_number');
    table.string('avatar');
    table.string('postal_code');
    table.string('street_address');
    table.string('city');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
