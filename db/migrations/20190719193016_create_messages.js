
exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', function (table) {
    table.increments();
    table.integer('from_id');
    table.integer('to_id');
    table.string('content');
    table.boolean('read');
    table.foreign('from_id').references('id').inTable('users');
    table.foreign('to_id').references('id').inTable('users');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('messages');
};
