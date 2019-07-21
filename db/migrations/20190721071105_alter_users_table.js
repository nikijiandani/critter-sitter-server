
exports.up = function(knex) {
  return Promise.all([
    knex.schema.table('users', function(table) {
      table.specificType('home_coords', 'geometry(point, 4326)');
    })
  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.table('users', function(table) {
      table.dropColumn('home_coords');
    })
  ])
};
