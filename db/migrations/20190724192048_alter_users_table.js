
exports.up = function(knex) {
  return Promise.all([
    knex.schema.table('users', function(table) {
      table.string('bio');
    })
  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.table('users', function(table) {
      table.dropColumn('bio');
    })
  ])
};
